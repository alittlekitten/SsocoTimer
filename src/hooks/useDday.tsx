import React, { useState, useEffect } from "react";

const useDday = () => {
  const nowTime = new Date();
  const [year, setYear] = useState<number>(nowTime.getFullYear());
  const [month, setMonth] = useState<number>(nowTime.getMonth() + 1);
  const [day, setDay] = useState<number>(nowTime.getDate());
  const [ddayCal, setDdayCal] = useState<number | null>(0);

  const yearOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nowYear = new Date().getFullYear();
    const originalValue = e.target.value;
    const onlyNumber = originalValue.replace(/[^0-9]/g, "");
    if (!onlyNumber) setYear(0);
    else if (+onlyNumber > 2099) setYear(nowYear);
    else setYear(+onlyNumber);
  };

  const monthOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const originalValue = e.target.value;
    const onlyNumber = originalValue.replace(/[^0-9]/g, "");
    if (!onlyNumber) setMonth(0);
    else if (+onlyNumber > 12) return;
    else setMonth(+onlyNumber);
  };

  const dayOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maxDay = new Date(year, month, 0).getDate();
    const originalValue = e.target.value;
    const onlyNumber = originalValue.replace(/[^0-9]/g, "");
    if (!onlyNumber) setDay(0);
    else if (+onlyNumber > maxDay) return;
    else setDay(+onlyNumber);
  };

  useEffect(() => {
    const today = new Date();
    const dday = new Date(year, month - 1, day);
    const maxDay = new Date(year, month, 0).getDate();
    if (day > maxDay) setDay(maxDay);
    const calGetTime = today.getTime() - dday.getTime();
    const result = Math.floor(calGetTime / (1000 * 60 * 60 * 24));
    if (year < 1970 || year > 2099 || month === 0 || day === 0) {
      setDdayCal(null);
    } else {
      setDdayCal(result);
    }
  }, [year, month, day]);

  return {
    year,
    month,
    day,
    ddayCal,
    yearOnChange,
    monthOnChange,
    dayOnChange,
  };
};

export default useDday;
