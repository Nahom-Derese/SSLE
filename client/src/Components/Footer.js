import { React, useState } from "react";
import { animated, config, useSpring } from "react-spring";
import telegram from "../assets/telegram.svg";
import discord from "../assets/discord.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import github from "../assets/github.svg";

function Footer() {
  const [toggle, settoggle] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const animate = useSpring({ left: toggle[0] ? 0 : -350 });
  const animate_1 = useSpring({ left: toggle[1] ? 0 : -350 });
  const animate_2 = useSpring({ left: toggle[2] ? 0 : -350 });
  const animate_3 = useSpring({ left: toggle[3] ? 0 : -350 });
  const animate_4 = useSpring({ left: toggle[4] ? 0 : -350 });
  const animate_5 = useSpring({
    backgroundColor: toggle[5] ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0.5)",
    config: config.slow,
  });
  const animate_6 = useSpring({
    backgroundColor: toggle[6] ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0.5)",
    config: config.slow,
  });
  const animate_7 = useSpring({
    backgroundColor: toggle[7] ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0.5)",
    config: config.slow,
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
                newArray[0] = !newArray[0];
                settoggle(newArray);
              }}
              onMouseLeave={() => {
                const newArray = [...toggle];
                newArray[0] = !newArray[0];
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
                newArray[1] = !newArray[1];
                settoggle(newArray);
              }}
              onMouseLeave={() => {
                const newArray = [...toggle];
                newArray[1] = !newArray[1];
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
                newArray[2] = !newArray[2];
                settoggle(newArray);
              }}
              onMouseLeave={() => {
                const newArray = [...toggle];
                newArray[2] = !newArray[2];
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
                newArray[3] = !newArray[3];
                settoggle(newArray);
              }}
              onMouseLeave={() => {
                const newArray = [...toggle];
                newArray[3] = !newArray[3];
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
                newArray[4] = !newArray[4];
                settoggle(newArray);
              }}
              onMouseLeave={() => {
                const newArray = [...toggle];
                newArray[4] = !newArray[4];
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
              <animated.div
                onMouseEnter={() => {
                  const newArray = [...toggle];
                  newArray[5] = !newArray[5];
                  settoggle(newArray);
                }}
                onMouseLeave={() => {
                  const newArray = [...toggle];
                  newArray[5] = !newArray[5];
                  settoggle(newArray);
                }}
                className="portfolio"
                id="portfolio1"
                style={animate_5}
              />
            </a>
            <a href="#/">
              <animated.div
                onMouseEnter={() => {
                  const newArray = [...toggle];
                  newArray[6] = !newArray[6];
                  settoggle(newArray);
                }}
                onMouseLeave={() => {
                  const newArray = [...toggle];
                  newArray[6] = !newArray[6];
                  settoggle(newArray);
                }}
                className="portfolio"
                id="portfolio2"
                style={animate_6}
              />
            </a>
            <a href="#/">
              <animated.div
                onMouseEnter={() => {
                  const newArray = [...toggle];
                  newArray[7] = !newArray[7];
                  settoggle(newArray);
                }}
                onMouseLeave={() => {
                  const newArray = [...toggle];
                  newArray[7] = !newArray[7];
                  settoggle(newArray);
                }}
                className="portfolio"
                id="portfolio3"
                style={animate_7}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
