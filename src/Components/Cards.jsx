import React from "react";
import Madam from "../assets/Madam1.jpg";

function Cards() {
  return (
    <div className="Cards">
      <div className="card" style={{ width: 370, marginLeft: 30, height: 500 }}>
        <img
          src={Madam}
          className="card-img-top"
          alt="img1"
          style={{ height: 1400 }}
        />
        <div className="card-body">
          <p className="card-text" style={{ fontSize: 8 }}>
            Welcome madam. This site is dedicated to my love Sneha Saha (MIKA❤). The day I
            found you was 13th June 2024. I was travelling to New Delhi was in a
            train. Texted you at 10:04 AM since then we are talking everyday. I
            want to see you happy and always having a smile on your face❤. Can't
            forget each day after meeting you. First face to meet was on my birthday 21st September 2024 @Thana More.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
