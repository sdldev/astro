import { TypeAnimation } from "react-type-animation";

export function Typing() {
  return (
    <>
      <TypeAnimation
        className="z-[-2]"
        aria-hidden="true"
        sequence={[1000, "Portfolio Dashboard", 2000, "Explorer Mainnet/Testnet", 3000, "Node Setup"]}
        speed={5}
        repeat={Infinity}
      />
    </>
  );
}
