import { React, useState, useContext } from "react";
import { animated, config, useTransition } from "react-spring";
import { ResultContext } from "../Contexts/ResultContext";
import Avatar from "../assets/Avatar.png";
import Next from "../assets/next.svg";
import Stats from "./Stats";

function Results() {
  const [items, setItems] = useState([]);
  const [items2, setItems2] = useState([{}]);
  const [Data, setData] = useContext(ResultContext);

  const transitionIn = useTransition(items, {
    from: { x: 600, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    leave: { x: 600, opacity: 0 },
    delay: 100,
    config: config.gentle,
  });

  const transitionOut = useTransition(items2, {
    from: { x: -600, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    leave: { x: -600, opacity: 0 },
    delay: 100,
    config: config.gentle,
  });

  const Capitalize = (Name) => {
    const s = Name.toLowerCase().split(" ");
    for (var i = 0; i < s.length; i++) {
      s[i] = s[i].charAt(0).toUpperCase() + s[i].slice(1);
    }
    return s.join(" ");
  };

  return (
    <div className="Results-Card">
      {transitionOut((style, item) =>
        item ? (
          <animated.div className="Card-Container" style={style}>
            <img src={Avatar} className="avatar" alt="Some Here" />
            <div className="Details">
              <div className="detail">
                <span>Name :</span>
                <div>
                  <span>{Data[0] ? Capitalize(Data[0].Name) : "null"}</span>
                </div>
              </div>
              <div className="detail">
                <span>Sex :</span>
                <div>
                  <span>{Data[0] ? Data[0].Sex : "null"}</span>
                </div>
              </div>
              <div className="detail">
                <span>School :</span>
                <div>
                  <span>{Data[0] ? Data[0].School : "null"}</span>
                </div>
              </div>
              <div className="detail">
                <span>Stream :</span>
                <div>
                  <span>{Data[0] ? Data[0].Stream : "null"}</span>
                </div>
              </div>
              <div className="next-container">
                <img
                  src={Next}
                  onClick={() => {
                    setItems([{}]);
                    setItems2([]);
                  }}
                  alt="Next"
                  className="next"
                />
              </div>
            </div>

            <div className="Results">
              <div>
                <span>Biology</span>
                <span className="value">
                  {Data[0] ? Data[0].Result.Biology : "null"}
                </span>
              </div>
              <div>
                <span>Civics</span>
                <span className="value">
                  {Data[0] ? Data[0].Result.Civics : "null"}
                </span>
              </div>
              <div>
                <span>Chemistry</span>
                <span className="value">
                  {Data[0] ? Data[0].Result.Chemistry : "null"}
                </span>
              </div>
              <div>
                <span>Physics</span>
                <span className="value">
                  {Data[0] ? Data[0].Result.Physics : "null"}
                </span>
              </div>
              <div>
                <span>Maths</span>
                <span className="value">
                  {Data[0] ? Data[0].Result.Maths : "null"}
                </span>
              </div>
              <div>
                <span>SAT</span>
                <span className="value">
                  {Data[0] ? Data[0].Result.SAT : "null"}
                </span>
              </div>
              <div>
                <span>English</span>
                <span className="value">
                  {Data[0] ? Data[0].Result.English : "null"}
                </span>
              </div>
              <hr size="1" width="108%" />
              <div>
                <span className="total">Total</span>
                <span className="value">
                  {Data[0] ? Data[0].Result.Total : "null"}
                </span>
              </div>
            </div>
          </animated.div>
        ) : (
          ""
        )
      )}

      {transitionIn((style, item) =>
        item ? (
          <animated.div className="Stats-Container" style={style}>
            <Stats toggler={setItems2} toggle={setItems} />
          </animated.div>
        ) : (
          ""
        )
      )}
    </div>
  );
}

export default Results;
