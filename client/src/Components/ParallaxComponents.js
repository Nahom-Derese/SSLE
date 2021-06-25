import React, { Fragment, useEffect, useState } from "react";
import Gcap from "../assets/graduation-cap.svg";
import Ghat from "../assets/graduation-hat-and-diploma.svg";
import Zig from "../assets/zigzag-line.svg";
import { useSpring, animated } from "react-spring";

function ParallaxComponents() {
  const [offsetY, setOffsetY] = useState(0);

  const effect = useSpring({
    transform: `translateY(${offsetY * -0.25}px)`,
  });

  const effect2 = useSpring({
    transform: `translateY(${offsetY * 0.35}px)`,
  });

  const effect3 = useSpring({
    transform: `translateY(${offsetY * 0.15}px)`,
  });

  const effect4 = useSpring({
    transform: `translateY(${offsetY * -0.35}px)`,
  });

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Fragment>
      <animated.div className="orb" style={effect4}></animated.div>
      <animated.img className="item" src={Gcap} style={effect}></animated.img>
      <animated.div className="item-1" style={effect}></animated.div>
      <animated.img
        className="item-2"
        src={Ghat}
        style={effect2}
      ></animated.img>
      <animated.img
        className="item-3"
        src={Ghat}
        style={effect3}
      ></animated.img>
      <animated.img className="item-4" src={Zig} style={effect}></animated.img>
      <animated.img className="item-5" src={Ghat} style={effect}></animated.img>
      <animated.img
        className="item-6"
        src={Gcap}
        style={effect2}
      ></animated.img>
      <animated.img className="item-7" src={Zig} style={effect3}></animated.img>
    </Fragment>
  );
}

export default ParallaxComponents;
