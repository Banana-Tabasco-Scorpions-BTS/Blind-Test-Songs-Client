import React, { useState, useEffect } from "react";

//Date() or date workers
//https://abhi9bakshi.medium.com/why-javascript-timer-is-unreliable-and-how-can-you-fix-it-9ff5e6d34ee0

export function CountDownTimer(props) {
  const { seconds = 30, setRedirect } = props;

  const [time, setTime] = useState({ seconds });

  const tick = () => {
    if (time.seconds === 0) {
      setRedirect(true);
      reset();
    } else {
      setTime({ seconds: time.seconds - 1 });
    }
  };

  const reset = () => setTime({ seconds: time.seconds });

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return <div>{`${time.seconds.toString()}`}</div>;
}
