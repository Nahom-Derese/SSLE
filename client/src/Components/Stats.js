import React, { Fragment, useState, useEffect } from "react";
import pervious from "../assets/next.svg";
import { useQuery } from "@apollo/client";
import { LOAD_TOP_RESULT } from "../GraphQL/Queries";

function Stats({ toggler, toggle }) {
  const [Top, setTop] = useState([]);
  const { data, loading, error } = useQuery(LOAD_TOP_RESULT, {
    variables: { TOP: 10 },
  });

  useEffect(() => {
    if (!loading) {
      if (data.getTopResult) {
        setTop(data.getTopResult);
      }
    }
    if (error) {
      console.log(error);
    }
  }, [data, loading, error]);
  let io = 0;
  return (
    <Fragment>
      <div className="First_line">
        <div className="Rank-viewport">
          <h1>Rank</h1>
        </div>
        <div className="Detail-viewport">
          <h1>Detail</h1>
        </div>
      </div>

      <div className="previous-container">
        <img
          className="previous"
          onClick={() => {
            toggler([{}]);
            toggle([]);
          }}
          src={pervious}
          alt="Pervious"
        />
      </div>

      <div className="Second_line">
        <div className="Percentile-viewport">
          <h1>Percentile</h1>
        </div>
        <div className="Top-10-viewport">
          <div className="container-top">
            <h3>Top 10 Students</h3>
            {Top.map((student) => {
              const s = student.Name.toLowerCase().split(" ");
              for (var i = 0; i < s.length; i++) {
                s[i] = s[i].charAt(0).toUpperCase() + s[i].slice(1);
              }
              const s2 = s.join(" ");
              io++;
              return (
                <div className="top">
                  {`${io}. ${s2}`}
                  <span>{student.Result.Total}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="Similar-viewport">
        <div className="Placement-viewport">
          <h1>Similar Placement</h1>
        </div>
        <div className="Result-viewport">
          <h1>Similar Result</h1>
        </div>
      </div>
    </Fragment>
  );
}

export default Stats;
