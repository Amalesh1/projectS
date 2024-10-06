import React, { useState, useEffect } from 'react';

const TimeSince = ({ pastDate }) => {
  const [timePassed, setTimePassed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Function to calculate time difference
    const calculateTimeDifference = () => {
      const currentDate = new Date();
      const past = new Date(pastDate);
      const timeDifference = currentDate.getTime() - past.getTime();

      const seconds = Math.floor(timeDifference / 1000);
      const minutes = Math.floor(timeDifference / (1000 * 60));
      const hours = Math.floor(timeDifference / (1000 * 60 * 60));
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

      setTimePassed({
        days: days,
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60,
      });
    };

    // Run every second
    const intervalId = setInterval(calculateTimeDifference, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [pastDate]);

  return (
    <div style={{backgroundColor: "lightskyblue", textAlign:'center', border: '2px solid pink', width: 370, marginLeft:20, marginTop:1, fontSize: 5}}>
      <h3 style={{fontSize:10}}>Time Since First Text: {" "}
      <span style={{ color: "blue" }}>{timePassed.days} days</span>{" "}
      <span style={{color: "blueviolet"}}>{timePassed.hours} hours</span> {" "} 
      <span style={{color: "darkcyan"}}>{timePassed.minutes} minutes </span> {" "}
      <span style={{color: 'darkred'}}>{timePassed.seconds} seconds </span>
        </h3>
    </div>
  );
};

export default TimeSince;
