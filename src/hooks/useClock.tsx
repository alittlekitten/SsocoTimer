import { useEffect } from "react";
import useTimeManage from "./utils/useTimeManage";
import { useSelector } from "react-redux";
import { RootState } from "@src/store";

const useClock = () => {
  const { time, setTime, playTimeout } = useTimeManage();
  const { hour12 } = useSelector((state: RootState) => state.clockReducer);

  useEffect(() => {
    const now = new Date(Date.now());
    playTimeout.current = setTimeout(() => {
      setTime({
        ms: now.getMilliseconds(),
        second: now.getSeconds(),
        minute: now.getMinutes(),
        hour: now.getHours(),
        day: now.getDate(),
        month: now.getMonth() + 1,
        year: now.getFullYear(),
      });
    }, 1);

    return () => {
      if (playTimeout.current) clearTimeout(playTimeout.current);
    };
  }, [time, playTimeout, setTime]);

  return { time, hour12 };
};

export default useClock;
