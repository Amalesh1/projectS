import React, { useState, useEffect } from "react";

const Countdown = () => {
  const targetDate = new Date("2025-05-03T23:59:59+05:30").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const countDownComplete =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  return (
    <div style={{ position: "center" }} className="bg-body-primary">
      {countDownComplete ? (
        <h1>!!!Happy Birthday Mikaa❤❤!!!</h1>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h3 style={{backgroundColor: "lightskyblue",  border: '2px solid pink', width: 370, marginLeft:30, marginTop:6, fontSize: 10}}>
            Countdown to 21st Birthday:{" "}
            <span style={{ color: "blue" }}>{timeLeft.days} Days </span>{" "}
            <span style={{color: "blueviolet"}}>{timeLeft.hours} Hours </span>{" "}
            <span style={{color: "darkcyan"}}>{timeLeft.minutes} Minutes </span>
            <span style={{color: "darkred"}}>{timeLeft.seconds} Seconds</span>
          </h3>
        </div>
      )}
    </div>
  );
};

export default Countdown;
