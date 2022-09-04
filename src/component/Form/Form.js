import React, {  useState } from "react";
import useInput from "../../hooks/use-input";
import "./Form.css";
const Form = (props) => {
  
  const [enteredData, setEnteredData] = useState("");
  const [enteredDataIsTouched, setEnteredDataIsTouched] = useState(false);
  const enteredDataIsValid = enteredData.trim() !== "";
  const inputIsInvalid = !enteredDataIsValid && enteredDataIsTouched;
  let formIsValid = false;
  const inputClasses = inputIsInvalid ? "invalid" : "";
  
  if (enteredDataIsValid) {
    formIsValid = true;
  }

  const changeHandler = (e) => {
    setEnteredData(e.target.value);
  };

  const inputBlurHandler = () => {
    setEnteredDataIsTouched(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setEnteredDataIsTouched(true);
    if (!enteredDataIsValid) {
      return;
    }
    console.log(enteredData);
    setEnteredData("");
    setEnteredDataIsTouched(false);
  };

  return (
    <div>
      <h1 className="form-title">FORM</h1>
      <form className="form-container" onSubmit={submitHandler}>
        <div>
          <div>
            <label htmlFor="name-input"> Name :</label>
            <input
              type="text"
              id="name-input"
              onChange={changeHandler}
              className={inputClasses}
              value={enteredData}
              onBlur={inputBlurHandler}
            ></input>
            {inputIsInvalid && <p className="empty-error">Must not be empty</p>}
          </div>
          {/* <label htmlFor="lastName-input">Last name :</label>
          <input
            type="text"
            id="lastName-input"
            onChange={changeHandler}
            className={inputClasses}
              value={enteredData}
          ></input> {inputIsInvalid&&<p className="empty-error">Must not be empty</p>}
          <label htmlFor="email-input">Email adress :</label>
          <input type="email" id="email-input" className="invalid" onChange={changeHandler} className={inputClasses}
              value={enteredData}></input> {inputIsInvalid&&<p className="empty-error">Must not be empty</p>}
          <label htmlFor="phoneNumber-input">Phone number :</label>
          <input
            type="text"
            id="phoneNumber-input"
            onChange={changeHandler}
            className={inputClasses}
              value={enteredData}
          ></input> {inputIsInvalid&&<p className="empty-error">Must not be empty</p>}
          <label htmlFor="mobileNumber-input">Mobile number :</label>
          <input
            type="number"
            id="mobileNumber-input"
            onChange={changeHandler}
            className={inputClasses}
              value={enteredData}
          ></input> {inputIsInvalid&&<p className="empty-error">Must not be empty</p>}
          <label htmlFor="adress-input">Adress :</label>
          <input type="text" id="adress-input" onChange={changeHandler} className={inputClasses}
              value={enteredData}></input> {inputIsInvalid&&<p className="empty-error">Must not be empty</p>} */}
          <button type="submit" disabled={!formIsValid}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
