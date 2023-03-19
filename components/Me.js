import SayHi from "./SayHi";
import Memoji from "./Memoji";
import Summary from "./Summary";
function Me() {
  return (
    <div className="flex justify-between items-center flex-row-reverse" id="me">
      <img className="w-60" src="/face.png" alt="memoji_wice" />
      <div id="about">
        <div className="text-white font-bold text-4xl">Self Taught</div>
        <div className="text-white font-bold text-4xl">
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
        <div className="text-white/50 font-semibold my-3">
          Hi there! My name is{" "}
          <span className="text-white font-bold">Doğu</span> and I am a
          developer with experience designing, developing and implementing
          applications and solutions using a range of technologies and
          languages.
        </div>
        <SayHi />
      </div>
    </div>
  );
}

export default Me;
