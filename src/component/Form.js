import React, { useState } from "react";

const Form = () => {
  const [userInput, setUserInput] = useState({});
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    password: "1111",
  });

  const changeHandler = (e) => {
    setUserInput(e.target.value);
    return userInput;
  };

  //double click
  const submitHandler = (e) => {
    fetch("/",{
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
             "first_name": userInput
        })
    })
      .then((response) => {
        console.log(response);
      })
      .then((data) => console.log(data));

    e.preventDefault();
    //name = Object.keys(userData)[0]
  };

  return (
    <div>
      <h1>فرم </h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>
            نام : <input type="text" id="name" onChange={changeHandler}></input>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
