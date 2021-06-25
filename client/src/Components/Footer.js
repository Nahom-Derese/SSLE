import { React, useState } from "react";
import { animated, useSpring } from "react-spring";
import telegram from "../assets/telegram.svg";
import discord from "../assets/discord.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import github from "../assets/github.svg";
import suitcase from "../assets/Projects.jpg";
import suitcase_1 from "../assets/project-2.jpg";
import suitcase_2 from "../assets/project-3.jpg";

function Footer() {
  const [toggle, settoggle] = useState([false, false, false, false, false]);

  const animate = useSpring({
    left: toggle[0] ? 0 : -350,
  });
  const animate_1 = useSpring({
    left: toggle[1] ? 0 : -350,
  });
  const animate_2 = useSpring({
    left: toggle[2] ? 0 : -350,
  });
  const animate_3 = useSpring({
    left: toggle[3] ? 0 : -350,
  });
  const animate_4 = useSpring({
    left: toggle[4] ? 0 : -350,
  });

  return (
    <div className="Footer">
      <div className="footer-container">
        <div className="Contact-me">
          <a href="#/">
            <img
              className="telegram"
              onMouseEnter={() => {
                const newArray = [...toggle];
                newArray[0] = true;
                settoggle(newArray);
              }}
              onMouseLeave={() => {
                const newArray = [...toggle];
                newArray[0] = false;
                settoggle(newArray);
              }}
              src={telegram}
              alt="telegram"
            />
            <animated.span style={animate}>@Nahom-Derese</animated.span>
          </a>
          <a href="#/">
            <img
              className="github"
              onMouseEnter={() => {
                const newArray = [...toggle];
                newArray[1] = true;
                settoggle(newArray);
              }}
              onMouseLeave={() => {
                const newArray = [...toggle];
                newArray[1] = false;
                settoggle(newArray);
              }}
              src={discord}
              alt="github"
            />
            <animated.span style={animate_1}>@Nahom-Derese</animated.span>
          </a>
          <a href="#/">
            <img
              className="linkedIn"
              onMouseEnter={() => {
                const newArray = [...toggle];
                newArray[2] = true;
                settoggle(newArray);
              }}
              onMouseLeave={() => {
                const newArray = [...toggle];
                newArray[2] = false;
                settoggle(newArray);
              }}
              src={linkedin}
              alt="linkedIn"
            />
            <animated.span style={animate_2}>@Nahom-Derese</animated.span>
          </a>
          <a href="#/">
            <img
              className="twitter"
              onMouseEnter={() => {
                const newArray = [...toggle];
                newArray[3] = true;
                settoggle(newArray);
              }}
              onMouseLeave={() => {
                const newArray = [...toggle];
                newArray[3] = false;
                settoggle(newArray);
              }}
              src={twitter}
              alt="twitter"
            />
            <animated.span style={animate_3}>@Nahom-Derese</animated.span>
          </a>
          <a href="#/">
            <img
              className="discord"
              onMouseEnter={() => {
                const newArray = [...toggle];
                newArray[4] = true;
                settoggle(newArray);
              }}
              onMouseLeave={() => {
                const newArray = [...toggle];
                newArray[4] = false;
                settoggle(newArray);
              }}
              src={github}
              alt="discord"
            />
            <animated.span style={animate_4}>@Nahom-Derese</animated.span>
          </a>
        </div>

        <div className="view-Projects">
          <div className="text">View Other Projects</div>
          <div className="portfolios">
            <a href="#/">
              <img className="portfolio" src={suitcase} alt="suuitcase" />
            </a>
            <a href="#/">
              <img className="portfolio" src={suitcase_1} alt="suuitcase" />
            </a>
            <a href="#/">
              <img className="portfolio" src={suitcase_2} alt="suuitcase" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
