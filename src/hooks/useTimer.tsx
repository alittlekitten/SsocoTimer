import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { useSelector } from "react-redux";
import { RootState } from "@src/store";
import useTimeManage from "./utils/useTimeManage";
import Fin from "@sounds/chicken.mp3";

interface LapState {
  hour: number;
  minute: number;
  second: number;
  ms: number;
}

const useTimer = () => {
  const { time, setTime, playTimeout } = useTimeManage();
  const { second, minute, hour, ms } = time;

  const [lap, setLap] = useState<LapState[]>([]); // 랩
  const [status, setStatus] = useState<string>("stop");
  const speed = useRef<number>(300); // 마우스를 꾹 눌렀을 때 증감 스피드
  const timeout = useRef<NodeJS.Timeout | null>(null); // 증감 스피드를 조절 및 재귀적 사용을 위한 setTimeout 변수
  const startTime = useRef<number | null>(null); // 시작 시간을 담은 ref요소
  const playTime = useRef<Date | null>(null); // play 눌렀을 때 설정된 시간을 담은 ref 요소
  const alarm = useMemo(() => new Audio(Fin), []); // 오디오 요소
  const lapDOM = useRef<HTMLDivElement | null>(null); // lapDOM을 담을 ref 요소
  const { timerAlarm } = useSelector((state: RootState) => state.soundReducer);

  // 마우스 클릭할 때 동작들
  const secondOnIncrease = () => {
    if (!(hour === 999 && minute === 59 && second === 59)) {
      setStatus("secondIncrease");
      secondIncrease();
    } else {
      setTime({ ...time, ms: 999 });
    }
  };

  const secondIncrease = useCallback(() => {
    // hour, minute, second가 바뀔 때만 함수가 재생성되도록 useCallback 사용
    if (speed.current > 30) speed.current -= 10;
    if (second < 59) setTime({ ...time, second: second + 1 });
    else {
      // 1000시간 미만으로만 설정 가능하도록 고정
      if (hour === 999 && minute === 59 && second === 59) {
        setStatus("stop");
        if (playTimeout.current) clearTimeout(playTimeout.current);
      } else if (minute < 59) {
        setTime({ ...time, second: 0, minute: minute + 1 });
      } else {
        setTime({ ...time, second: 0, minute: 0, hour: hour + 1 });
      }
    }
  }, [playTimeout, time, setTime, hour, minute, second]);

  const secondOnDecrease = () => {
    if (!(hour === 0 && minute === 0 && second === 0)) {
      setStatus("secondDecrease");
      secondDecrease();
    } else {
      setTime({ ...time, ms: 0 });
    }
  };

  const secondDecrease = useCallback(() => {
    // hour, minute, second가 바뀔 때만 함수가 재생성되도록 useCallback 사용
    if (speed.current > 30) speed.current -= 10;
    if (second > 0) {
      if (hour === 0 && minute === 0 && second === 1) {
        setStatus("stop");
        speed.current = 300;
        if (playTimeout.current) clearTimeout(playTimeout.current);
      }
      setTime({ ...time, second: second - 1 });
    } else {
      if (minute > 0) setTime({ ...time, second: 59, minute: minute - 1 });
      else setTime({ ...time, second: 59, minute: 59, hour: hour - 1 });
    }
  }, [playTimeout, setTime, time, hour, minute, second]);

  const minuteOnIncrease = () => {
    if (!(hour === 999 && minute === 59)) {
      setStatus("minuteIncrease");
      minuteIncrease();
    } else {
      setTime({ ...time, second: 59, ms: 999 });
    }
  };

  const minuteIncrease = useCallback(() => {
    // hour, minute이 바뀔 때만 함수가 재생성되도록 useCallback 사용
    if (speed.current > 30) speed.current -= 10;
    if (minute < 59) setTime({ ...time, minute: minute + 1 });
    else {
      if (hour === 999 && minute === 59) {
        setStatus("stop");
        if (playTimeout.current) clearTimeout(playTimeout.current);
      } else {
        setTime({ ...time, minute: 0, hour: hour + 1 });
      }
    }
  }, [playTimeout, time, setTime, hour, minute]);

  const minuteOnDecrease = () => {
    if (!(hour === 0 && minute === 0)) {
      setStatus("minuteDecrease");
      minuteDecrease();
    } else {
      setTime({ ...time, second: 0, ms: 0 });
    }
  };

  const minuteDecrease = useCallback(() => {
    // hour, minute이 바뀔 때만 함수가 재생성되도록 useCallback 사용
    if (speed.current > 30) speed.current -= 10;
    if (minute > 0) {
      if (hour === 0 && minute === 1) {
        setStatus("stop");
        speed.current = 300;
        if (playTimeout.current) clearTimeout(playTimeout.current);
      }
      setTime({ ...time, minute: minute - 1 });
    } else {
      if (hour > 0) setTime({ ...time, minute: 59, hour: hour - 1 });
    }
  }, [playTimeout, setTime, time, hour, minute]);

  const hourOnIncrease = () => {
    if (hour !== 999) {
      setStatus("hourIncrease");
      hourIncrease();
    } else {
      setTime({ ...time, minute: 59, second: 59, ms: 999 });
    }
  };

  const hourIncrease = useCallback(() => {
    // hour이 바뀔 때만 함수가 재생성되도록 useCallback 사용
    if (speed.current > 30) speed.current -= 10;
    if (hour === 999) {
      setStatus("stop");
      if (playTimeout.current) clearTimeout(playTimeout.current);
    } else {
      setTime({ ...time, hour: hour + 1 });
    }
  }, [playTimeout, setTime, time, hour]);

  const hourOnDecrease = () => {
    if (hour !== 0) {
      setStatus("hourDecrease");
      hourDecrease();
    } else {
      setTime({ ...time, minute: 0, second: 0, ms: 0 });
    }
  };

  const hourDecrease = useCallback(() => {
    // hour이 바뀔 때만 함수가 재생성되도록 useCallback 사용
    if (speed.current > 30) speed.current -= 10;
    if (hour > 0) {
      if (hour === 1) {
        setStatus("stop");
        speed.current = 300;
        if (playTimeout.current) clearTimeout(playTimeout.current);
      }
      setTime({ ...time, hour: hour - 1 });
    }
  }, [playTimeout, setTime, time, hour]);

  const offPress = () => {
    if (
      status === "secondIncrease" ||
      status === "secondDecrease" ||
      status === "minuteIncrease" ||
      status === "minuteDecrease" ||
      status === "hourIncrease" ||
      status === "hourDecrease"
    ) {
      setStatus("pause");
      speed.current = 300;
      if (timeout.current) clearTimeout(timeout.current);
    }
  };

  const secondChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    timePause();
    const originalValue = e.target.value;
    const onlyNumber = originalValue.replace(/[^0-9]/g, "");
    // input창에 아무것도 없거나, 60 넘어가면 초기화
    if (!onlyNumber || +onlyNumber > 59) setTime({ ...time, second: 59 });
    else setTime({ ...time, second: +onlyNumber });
  };

  const minuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    timePause();
    const originalValue = e.target.value;
    const onlyNumber = originalValue.replace(/[^0-9]/g, "");
    if (!onlyNumber || +onlyNumber > 59) setTime({ ...time, minute: 59 });
    else setTime({ ...time, minute: +onlyNumber });
  };

  const hourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    timePause();
    const originalValue = e.target.value;
    const onlyNumber = originalValue.replace(/[^0-9]/g, "");
    // 입력값이 없거나 999시간 넘어가면 0으로 초기화
    if (!onlyNumber || +onlyNumber > 999) setTime({ ...time, hour: 999 });
    else setTime({ ...time, hour: +onlyNumber });
  };

  // 타이머 상태에 따른 동작

  const timePlay = () => {
    // 최초 시작
    if (startTime.current === null && status !== "play") {
      startTime.current = Date.now();
      playTime.current = new Date(
        ms + second * 1000 + minute * 1000 * 60 + hour * 1000 * 60 * 60
      );
    }

    if (!(hour === 0 && minute === 0 && second === 0 && ms < 10))
      setStatus("play"); // 문자열은 기본형 데이터라 play를 play로 바꿔도 변화 X
  };

  const timeLap = () => {
    if (status === "play")
      setLap((prev) => [...prev, { hour, minute, second, ms }]);
  };

  const downScroll = () => {
    const refDOM = lapDOM.current;
    if (!refDOM) return;
    refDOM.scrollTop = refDOM.scrollHeight;
  };

  const timePause = () => {
    setStatus("pause");
    if (status === "play") {
      if (playTimeout.current) clearInterval(playTimeout.current);
      startTime.current = null;
      playTime.current = null;
    }
  };

  const timeReset = () => {
    setStatus("stop");
    setLap([]);
    if (playTimeout.current) clearInterval(playTimeout.current);
    setTime({ ...time, ms: 0, second: 0, minute: 0, hour: 0 });
    startTime.current = null;
    playTime.current = null;
  };

  const playAlarm = useCallback(() => {
    alarm.play();
  }, [alarm]);

  // lap이 변화할 때 스크롤 아래로 내려주기
  useEffect(() => {
    downScroll();
  }, [lap]);

  // 시간의 흐름
  useEffect(() => {
    if (!startTime.current) startTime.current = Date.now();
    if (!playTime.current) {
      playTime.current = new Date(
        ms + second * 1000 + minute * 1000 * 60 + hour * 1000 * 60 * 60
      );
    }
    const cal = new Date(
      Math.max(+playTime.current - (Date.now() - startTime.current), 0)
    ); // 시작할 때 해당 시간에 1초를 부여하고 0이 되면 딱 끝나도록 하기 위해 999를 더해줌
    // play 눌렀을 때의 로직
    if (status === "play") {
      if (hour === 0 && minute === 0 && second === 0 && ms === 0) {
        if (playTimeout.current) clearTimeout(playTimeout.current);
        setTime({ ...time, ms: 0 });
        setStatus("stop");
        startTime.current = null;
        playTime.current = null;
        if (timerAlarm) playAlarm();
      } else {
        playTimeout.current = setTimeout(() => {
          setTime({
            ...time,
            ms: cal.getUTCMilliseconds(),
            second: cal.getUTCSeconds(),
            minute: cal.getUTCMinutes(),
            hour:
              cal.getUTCHours() +
              (cal.getUTCDate() - 1) * 24 +
              cal.getUTCMonth() * 24 * 31,
          });
        }, 1);
      }
    }
    if (
      status === "pause" ||
      status === "stop" ||
      status === "secondIncrease" ||
      status === "secondDecrease" ||
      status === "minuteIncrease" ||
      status === "minuteDecrease" ||
      status === "hourIncrease" ||
      status === "hourDecrease"
    ) {
      startTime.current = null;
      playTime.current = null;
    }

    return () => {
      if (playTimeout.current) clearTimeout(playTimeout.current);
    };
  }, [
    playTimeout,
    setTime,
    time,
    hour,
    minute,
    second,
    ms,
    status,
    timerAlarm,
    playAlarm,
  ]);

  useEffect(() => {
    if (status === "secondIncrease") {
      timeout.current = setTimeout(() => {
        secondIncrease();
      }, speed.current);
    } else if (status === "secondDecrease") {
      timeout.current = setTimeout(() => {
        secondDecrease();
      }, speed.current);
    } else if (status === "minuteIncrease") {
      timeout.current = setTimeout(() => {
        minuteIncrease();
      }, speed.current);
    } else if (status === "minuteDecrease") {
      timeout.current = setTimeout(() => {
        minuteDecrease();
      }, speed.current);
    } else if (status === "hourIncrease") {
      timeout.current = setTimeout(() => {
        hourIncrease();
      }, speed.current);
    } else if (status === "hourDecrease") {
      timeout.current = setTimeout(() => {
        hourDecrease();
      }, speed.current);
    }
  }, [
    secondIncrease,
    secondDecrease,
    minuteIncrease,
    minuteDecrease,
    hourIncrease,
    hourDecrease,
    status,
  ]);

  return {
    time,
    lap,
    status,
    speed,
    lapDOM,
    secondOnIncrease,
    secondOnDecrease,
    minuteOnIncrease,
    minuteOnDecrease,
    hourOnIncrease,
    hourOnDecrease,
    offPress,
    secondChange,
    minuteChange,
    hourChange,
    timePlay,
    timeLap,
    timePause,
    timeReset,
  };
};

export default useTimer;
