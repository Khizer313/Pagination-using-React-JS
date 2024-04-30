import React, { useState } from "react";

function Form() {
  const [txt, setTxt] = useState("Heading");
  const [text, setText] = useState();
  const [textTwo, setTextTwo] = useState();

  const ChangeNow = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };
  const ChangeNowTwo = (e) => {
    console.log(e.target.value);
    setTextTwo(e.target.value);
  };

  const MyFun = () => {
    setTxt(txt + " " + text + " " + textTwo);
  };

  return (
    <>
      <h1>{txt}</h1>
      <input type="text" placeholder="Enter to display" onChange={ChangeNow} />
      <input type="text" placeholder="Enter to display" onChange={ChangeNowTwo} />
      <button style={{ background: "red", color: "white" }} onClick={MyFun}>
        click Me
      </button>
    </>
  );
}

export default Form;
