import { React, useState, useContext } from "react";
import { useSpring, animated } from "react-spring";
import { useLazyQuery } from "@apollo/client";
import { LOAD_BY_NAME, LOAD_BY_Reg_NO } from "../GraphQL/Queries";
import { ResultContext } from "../Contexts/ResultContext";

function Form({ setToggle_2, Toggle_2, Toggle_3, setToggle_3 }) {
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
  const [getResult, { data: data_1, loading: loading_1 }] = useLazyQuery(
    LOAD_BY_Reg_NO,
    {
      fetchPolicy: "no-cache",
      variables: { Reg_no: Reg_no },
      onCompleted: (data) => {
        setData([data_1.getResultByReg_no]);
        setToggle_2(!Toggle_2);
      },
    }
  );
  const [getName, { data: data_2, loading: loading_2 }] = useLazyQuery(
    LOAD_BY_NAME,
    {
      fetchPolicy: "no-cache",
      variables: { Name: Name },
      onCompleted: (data) => {
        setData(data.getResultByName);
        if (data.getResultByName.length > 1) {
          setToggle_3(!Toggle_3);
        } else if (typeof data.getResultByName[0] === "object") {
          setToggle_2(!Toggle_2);
        } else {
          alert(
            "Unfortunately We couldn't find your Result by your name try using Reg_no"
          );
          window.location.reload();
        }
      },
    }
  );

  if (data_1 && data_1.getResultByReg_no) {
    console.log(data_1.getResultByReg_no);
  }
  if (loading_1) return <>loading</>;
  if (data_2 && data_2.getResultByName) {
    console.log(data_2.getResultByName);
  }
  if (loading_2) return <>loading</>;

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
