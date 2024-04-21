import { TypeAnimation } from "react-type-animation";

export function Typing() {
  return (
    <>
      <TypeAnimation
        className="z-[-2]"
        aria-hidden="true"
        sequence={[1000, "Validator", 2000, "Node Operator"]}
        speed={5}
        repeat={Infinity}
      />
    </>
  );
}
