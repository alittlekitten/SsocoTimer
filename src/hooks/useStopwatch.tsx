import { useState, useRef, useEffect } from "react";
import useTimeManage from "./utils/useTimeManage";

interface LapState {
  hour: number;
  minute: number;
  second: number;
  ms: number;
}

const useStopwatch = () => {
  const { time, setTime, playTimeout } = useTimeManage();
  const { ms, second, minute, hour } = time;
  const [lap, setLap] = useState<LapState[]>([]); // 랩
  const [status, setStatus] = useState<string>("stop");
  const startTime = useRef<number | null>(null); // 시작 시간을 담은 ref요소
  const pauseTime = useRef<number | null>(null); // 잠시 멈춘 시간을 담은 ref요소

  // 타이머 상태에 따른 동작

  const timePlay = () => {
    // 최초 시작
    if (status === "stop") startTime.current = Date.now();
    // pause후 시작
    else if (status === "pause") {
      if (startTime.current && pauseTime.current)
        startTime.current += Date.now() - pauseTime.current;
    }
    setStatus("play");
  };

  const timeLap = () => {
    if (status === "play")
      setLap((prev) => [...prev, { hour, minute, second, ms }]);
  };

  const timePause = () => {
    if (status === "play") {
      if (playTimeout.current) clearInterval(playTimeout.current);
      pauseTime.current = Date.now();
    }
    setStatus("pause");
  };

  const timeReset = () => {
    setStatus("stop");
    if (playTimeout.current) clearInterval(playTimeout.current);
    setLap([]);
    setTime({ ...time, ms: 0, second: 0, minute: 0, hour: 0 });
    startTime.current = null;
    pauseTime.current = null;
  };

  useEffect(() => {
    // play 눌렀을 때의 로직
    if (!startTime.current) startTime.current = Date.now();
    if (status === "play") {
      const now = new Date(Date.now() - startTime.current);
      playTimeout.current = setTimeout(() => {
        setTime({
          ...time,
          ms: now.getUTCMilliseconds(),
          second: now.getUTCSeconds(),
          minute: now.getUTCMinutes(),
          hour: now.getUTCHours(),
        });
      }, 1);
    }
    // clean-up 함수의 실행 순서는 "state 업데이트 -> 리렌더링 -> 클린업 -> 새로운 이펙트 실행" 이기 때문에 useEffect의 동작에는 문제가 없다!
    return () => {
      if (playTimeout.current) clearTimeout(playTimeout.current);
    };
  }, [playTimeout, setTime, time, status]);

  return {
    time,
    lap,
    status,
    timePlay,
    timeLap,
    timePause,
    timeReset,
  };
};

export default useStopwatch;
