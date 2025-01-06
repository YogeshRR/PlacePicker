import { useState, useEffect } from "react";

export default function ProgressBar ({timer}) {
const [remainingTime, setRemainingTime] = useState(timer);

 useEffect(() => {
   const intervalTime = setInterval(() => {
      setRemainingTime((previoustime) => previoustime - 10);
    }, 10);
    return () => {
      clearInterval (intervalTime);
    }
  },[]);

    return <progress value={remainingTime} max={timer} />
}