import React, { useContext } from "react";
import { ResultContext } from "../Contexts/ResultContext";

function WhoAreYou({ setToggle_2, Toggle_2, Toggle_3, setToggle_3 }) {
  const [Data, setData] = useContext(ResultContext);

  const Capitalize = (Name) => {
    const s = Name.toLowerCase().split(" ");
    for (var i = 0; i < s.length; i++) {
      s[i] = s[i].charAt(0).toUpperCase() + s[i].slice(1);
    }
    return s.join(" ");
  };

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
              <h4>{Capitalize(student.Name)}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhoAreYou;
