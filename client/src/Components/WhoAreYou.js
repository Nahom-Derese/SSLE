import React, { useContext } from "react";
import { ResultContext } from "../Contexts/ResultContext";

function WhoAreYou({ setToggle_2, Toggle_2, Toggle_3, setToggle_3 }) {
  const [Data, setData] = useContext(ResultContext);
  return (
    <div>
      <div className="WhoAreYou">
        <div className="container">
          {Data.map((student) => (
            <div
              className="student-class"
              onClick={() => {
                setData([student]);
                setToggle_2(!Toggle_2);
                setToggle_3(!Toggle_3);
              }}
            >
              <h4>{student.Name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhoAreYou;
