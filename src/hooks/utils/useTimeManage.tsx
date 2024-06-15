import { useState, useRef } from "react";

// 변수 초기화를 위해 전역에 Date 객체를 사용
const now = new Date(Date.now());

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
  ms: now.getMilliseconds(),
  second: now.getSeconds(),
  minute: now.getMinutes(),
  hour: now.getHours(),
  day: now.getDate(),
  month: now.getMonth() + 1,
  year: now.getFullYear(),
};

const useTimeManage = () => {
  const [time, setTime] = useState<ITime>(initState); // 밀리초 (정밀도 1/1000)
  const playTimeout = useRef<NodeJS.Timeout | null>(null);

  return { time, setTime, playTimeout };
};

export default useTimeManage;
