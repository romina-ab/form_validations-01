import React, { useState } from "react";
import "./Form.css";
const Form = () => {
  const [userInput, setUserInput] = useState({});
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    password: "1111",
  });

  const changeHandler = (e) => {
    setUserInput(e.target.value);
    console.log(userInput);
  };

  //double click
  const submitHandler = (e) => {
    alert("submit");
    e.preventDefault();
    //name = Object.keys(userData)[0]
  };

  return (
    <div>
      <h1 className="form-title">FORM</h1>
      <form className="form-container" onSubmit={submitHandler}>
        <div>
          <div>
            <label htmlFor="name-input"> Name :</label>
            <input type="text" id="name-input" className="invalid" onChange={changeHandler}></input>
          </div>
          <label htmlFor="lastName-input">Last name :</label>
          <input
            type="text"
            id="lastName-input"
            onChange={changeHandler}
          ></input>
          <label htmlFor="email-input">Email adress :</label>
          <input type="email" id="email-input" className="invalid" onChange={changeHandler}></input>
          <label htmlFor="phoneNumber-input">Phone number :</label>
          <input
            type="text"
            id="phoneNumber-input"
            onChange={changeHandler}
          ></input>
          <label htmlFor="mobileNumber-input">Mobile number :</label>
          <input
            type="number"
            id="mobileNumber-input"
            onChange={changeHandler}
          ></input>
          <label htmlFor="adress-input">Adress :</label>
          <input type="text" id="adress-input" onChange={changeHandler}></input>
          <button type="submit" disabled>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
