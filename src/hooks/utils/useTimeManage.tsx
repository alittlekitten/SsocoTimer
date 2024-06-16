import { useState, useRef } from "react";

interface ITime {
  ms: number;
  second: number;
  minute: number;
  hour: number;
  day: number;
  month: number;
  year: number;
}

const initState: ITime = {
  ms: 0,
  second: 0,
  minute: 0,
  hour: 0,
  day: 0,
  month: 0,
  year: 0,
};

const useTimeManage = () => {
  const [time, setTime] = useState<ITime>(initState); // 밀리초 (정밀도 1/1000)
  const playTimeout = useRef<NodeJS.Timeout | null>(null);

  return { time, setTime, playTimeout };
};

export default useTimeManage;
