import { React, useState } from "react";
import { useSpring, animated } from "react-spring";
import { useLazyQuery } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";

function Form() {
  //React-Spring Stuff Here
  const [Toggled, setToggled] = useState(false);

  const fade = useSpring({
    background: Toggled
      ? "rgba(85, 21, 202, 0.879)"
      : "rgba(85, 21, 202, 0.379)",
  });

  //Apollo Client Stuff
  const [Reg_no, setReg_no] = useState(0);
  const [getResult, { data, loading, error }] = useLazyQuery(LOAD_USERS, {
    variables: { Reg_no: Reg_no },
  });

  const [Data, setData] = useState([]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <p>Error has Occured: {error.message}</p>;
  if (data) {
    setData(data.getSingleResult);
  }

  return (
    <div className="Form-container" id="demo">
      <form
        onSubmit={() => {
          getResult();
        }}
      >
        <div className="input">
          <label>Registration number :</label>
          <input
            type="text"
            onChange={(event) => {
              setReg_no(parseInt(event.target.value));
            }}
          />
          <animated.button
            type="submit"
            style={fade}
            onMouseEnter={() => {
              setToggled(!Toggled);
            }}
            onMouseLeave={() => {
              setToggled(!Toggled);
            }}
          >
            Submit
          </animated.button>
          <label id="Forgot">
            <span> Forgot Reg.No? </span> Find by name
          </label>
        </div>
      </form>
    </div>
  );
}

export default Form;
