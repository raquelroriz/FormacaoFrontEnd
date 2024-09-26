import { useState } from "react";

const useCountdown = (date) => {
  const [day, setDay] = useState();
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [second, setSecond] = useState();

  const countdown = () => {
    const countDate = new Date(date).getTime();

    const now = new Date().getTime();

    const gap = now - countDate;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const dayNumber = Math.floor(gap / day);
    const hourNumber = Math.floor((gap % day) / hour);
    const minuteNumber = Math.floor((gap % hour) / minute);
    const secondNumber = Math.floor((gap % minute) / second);

    setDay(366 - dayNumber);
    setHour(60 - hourNumber);
    setMinute(60 - minuteNumber);
    setSecond(60 - secondNumber);
  };

  setInterval(countdown, 1000);

  return [day, hour, minute, second];
};

export default useCountdown;