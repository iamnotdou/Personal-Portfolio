import React from "react";

function Summary() {
  return (
    <div id="summary">
      <div>Self Taught</div>
      <div id="summary_front">
        Frontend Developer
        {/* <svg
          viewBox="0 0 216 108"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 55C50 50 150 50 200 55"
            stroke="url(#grad)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="grad"
              x1="26.3472"
              y1="52.375"
              x2="30.0038"
              y2="78.5776"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF51D7" />
              <stop offset="0.333333" stopColor="#FF4848" />
              <stop offset="0.609375" stopColor="#C300FF" />
              <stop offset="0.916667" stopColor="#6248FF" />
            </linearGradient>
          </defs>
        </svg> */}
      </div>
      <div>
        Hi there! My name is <span className="bold">Doğu</span> and I am a
        developer with experience designing, developing and implementing
        applications and solutions using a range of technologies and languages.
      </div>
    </div>
  );
}

export default Summary;
