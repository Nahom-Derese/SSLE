import React, { Fragment } from "react";
import pervious from "../assets/next.svg";

function Stats({ toggler, toggle }) {
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
          <h1>Top 10</h1>
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
