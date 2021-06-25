import { React, useState, useContext } from "react";
import { useSpring, animated } from "react-spring";
import { useLazyQuery } from "@apollo/client";
import { LOAD_BY_NAME, LOAD_BY_Reg_NO } from "../GraphQL/Queries";
import { ResultContext } from "../Contexts/ResultContext";

function Form({ setToggle_2, Toggle_2 }) {
  //React-Spring Stuff Here
  const [Toggled, setToggled] = useState(false);
  const [Data, setData] = useContext(ResultContext);

  const fade = useSpring({
    background: Toggled
      ? "rgba(85, 21, 202, 0.879)"
      : "rgba(85, 21, 202, 0.379)",
  });

  //Apollo Client Stuff
  const [Reg_no, setReg_no] = useState(0);
  const [Name, setName] = useState("");
  const [Forgot, setForgot] = useState(false);
  const [getResult, { data: data_1, loading: loading_1, error: error_1 }] =
    useLazyQuery(LOAD_BY_Reg_NO, {
      variables: { Reg_no: Reg_no },
    });
  const [getName, { data: data_2, loading: loading_2, error: error_2 }] =
    useLazyQuery(LOAD_BY_NAME, {
      variables: { Name: Name },
    });

  if (loading_1) return <h1>Loading...</h1>;
  if (error_1) return <p>Error has Occured: {error_1.message}</p>;
  if (data_1) {
    if (data_1.getResultByReg_no) {
      setData(data_1.getResultByReg_no);
      setToggle_2(!Toggle_2);
    }
  }

  if (loading_2) {
    return <></>;
  }
  if (error_2) {
    setData({});
  }
  if (data_2) {
    if (data_2.getResultByName) {
      setData(data_2.getResultByName);
      setToggle_2(!Toggle_2);
    }
  }

  return (
    <div className="Form-container" id="demo">
      <form
        onSubmit={() => {
          if (!Forgot) {
            if (Reg_no >= 367635 && Reg_no <= 367912) {
              getResult();
            } else {
              alert("Please Enter A Valid Registration number");
            }
          } else {
            getName();
          }
        }}
      >
        <div className="input">
          <label>{!Forgot ? <>Registration Number</> : <>Full Name</>} :</label>
          {!Forgot ? (
            <input
              type="text"
              placeholder="Reg_no....."
              onChange={(event) => {
                setReg_no(parseInt(event.target.value));
              }}
            />
          ) : (
            <input
              type="text"
              placeholder="Name Here....."
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          )}
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
          <label
            id="Forgot"
            onClick={() => {
              setForgot(!Forgot);
            }}
          >
            <span> Forgot{!Forgot ? <> Reg.No? </> : <> Name? </>} </span> Find
            by {!Forgot ? <> Name </> : <> Reg_no </>}
          </label>
        </div>
      </form>
    </div>
  );
}

export default Form;
