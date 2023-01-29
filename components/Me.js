import Presence from "./Presence";
import SayHi from "./SayHi";
import Memoji from "./Memoji";
import Summary from "./Summary";
function Me() {
  return (
    <div id="me">
      <Memoji />
      <div id="about">
        <Summary />
        <Presence />
        <SayHi />
      </div>
    </div>
  );
}

export default Me;
