import { React, useState, useContext } from "react";
import { animated, config, useTransition } from "react-spring";
import { ResultContext } from "../Contexts/ResultContext";
import Avatar from "../assets/Avatar.jpg";
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

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  let Total = 0;

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
                  <span>{!isEmpty(Data) ? Data.Name : "null"}</span>
                </div>
              </div>
              <div className="detail">
                <span>Sex :</span>
                <div>
                  <span>{!isEmpty(Data) ? Data.Sex : "null"}</span>
                </div>
              </div>
              <div className="detail">
                <span>School :</span>
                <div>
                  <span>{!isEmpty(Data) ? Data.School : "null"}</span>
                </div>
              </div>
              <div className="detail">
                <span>Stream :</span>
                <div>
                  <span>{!isEmpty(Data) ? Data.Stream : "null"}</span>
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
                  {!isEmpty(Data) ? Data.Result.Biology : "null"}
                </span>
              </div>
              <div>
                <span>Civics</span>
                <span className="value">
                  {!isEmpty(Data) ? Data.Result.Civics : "null"}
                </span>
              </div>
              <div>
                <span>Chemistry</span>
                <span className="value">
                  {!isEmpty(Data) ? Data.Result.Chemistry : "null"}
                </span>
              </div>
              <div>
                <span>Physics</span>
                <span className="value">
                  {!isEmpty(Data) ? Data.Result.Physics : "null"}
                </span>
              </div>
              <div>
                <span>Maths</span>
                <span className="value">
                  {!isEmpty(Data) ? Data.Result.Maths : "null"}
                </span>
              </div>
              <div>
                <span>SAT</span>
                <span className="value">
                  {!isEmpty(Data) ? Data.Result.SAT : "null"}
                </span>
              </div>
              <div>
                <span>English</span>
                <span className="value">
                  {!isEmpty(Data) ? Data.Result.English : "null"}
                </span>
              </div>
              <hr size="1" width="108%" />
              <div>
                <span className="total">Total</span>
                <span className="value">
                  {!isEmpty(Data)
                    ? Object.keys(Data.Result).map((result) => {
                        if (result !== "__typename") {
                          Total = Total + Data.Result[result];
                        }
                        if (result === "SAT") {
                          return Total;
                        }
                      })
                    : "null"}
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
