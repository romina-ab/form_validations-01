import { useState } from "react";
import useInput from "../../hooks/use-input";
import AcountShow from "../modal/AcountShow";
import "./Form.css";
const Form = (props) => {
  let formIsValid = true;

  const [isShown, setIsShown] = useState(false);

  const {
    enteredData: nameEnteredData,
    reset: nameReset,
    inputIsInvalid: nameInputIsInvalid,
    enteredDataIsValid: nameEnteredDataIsValid,
    valueChangeHandler: nameValueChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
  } = useInput((nameEnteredData) => nameEnteredData.trim() !== "");
  const nameInputClasses = nameInputIsInvalid ? "invalid" : "";

  const {
    enteredData: emailEnteredData,
    reset: emailReset,
    inputIsInvalid: emailInputIsInvalid,
    enteredDataIsValid: emailEnteredDataIsValid,
    valueChangeHandler: emailValueChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
  } = useInput((emailEnteredData) => emailEnteredData.includes("@"));
  const emailInputClasses = emailInputIsInvalid ? "invalid" : "";

  const {
    enteredData: lastNameEnteredData,
    reset: lastNameReset,
    inputIsInvalid: lastNameInputIsInvalid,
    enteredDataIsValid: lastNameEnteredDataIsValid,
    valueChangeHandler: lastNameValueChangeHandler,
    inputBlurHandler: lastNameInputBlurHandler,
  } = useInput((lastNameEnteredData) => lastNameEnteredData.trim() !== "");
  const lastNameInputClasses = lastNameInputIsInvalid ? "invalid" : "";

  const {
    enteredData: phoneNumberEnteredData,
    reset: phoneNumberReset,
    inputIsInvalid: phoneNumberInputIsInvalid,
    enteredDataIsValid: phoneNumberEnteredDataIsValid,
    valueChangeHandler: phoneNumberValueChangeHandler,
    inputBlurHandler: phoneNumberInputBlurHandler,
  } = useInput(
    (phoneNumberEnteredData) => phoneNumberEnteredData.trim() !== ""
  );
  const phoneNumberInputClasses = phoneNumberInputIsInvalid ? "invalid" : "";

  const {
    enteredData: mobileNumberEnteredData,
    reset: mobileNumberReset,
    inputIsInvalid: mobileNumberInputIsInvalid,
    enteredDataIsValid: mobileNumberEnteredDataIsValid,
    valueChangeHandler: mobileNumberValueChangeHandler,
    inputBlurHandler: mobileNumberInputBlurHandler,
  } = useInput(
    (mobileNumberEnteredData) => mobileNumberEnteredData.trim() !== ""
  );
  const mobileNumberInputClasses = mobileNumberInputIsInvalid ? "invalid" : "";

  const {
    enteredData: addressEnteredData,
    reset: addressReset,
    inputIsInvalid: addressInputIsInvalid,
    enteredDataIsValid: addressEnteredDataIsValid,
    valueChangeHandler: addressValueChangeHandler,
    inputBlurHandler: addressInputBlurHandler,
  } = useInput((addressEnteredData) => addressEnteredData.trim() !== "");
  const addressInputClasses = addressInputIsInvalid ? "invalid" : "";
  if (
    nameEnteredDataIsValid &&
    emailEnteredDataIsValid &&
    lastNameEnteredDataIsValid &&
    phoneNumberEnteredDataIsValid &&
    mobileNumberEnteredDataIsValid &&
    addressEnteredDataIsValid
  ) {
    formIsValid = true;
  }
  const submitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    nameReset();
    lastNameReset();
    emailReset();
    phoneNumberReset();
    mobileNumberReset();
    addressReset();
  };
  const openHandler = (e) => {
    e.preventDefault();
    setIsShown(true);
  };
  const closeHandler = (e) => {
    e.preventDefault();
    setIsShown(false);
  };

  return (
    <form className="form-container" onSubmit={submitHandler}>
      <div>
        <div>
          <label htmlFor="name-input"> Name :</label>
          <input
            type="text"
            id="name-input"
            onChange={nameValueChangeHandler}
            className={nameInputClasses}
            value={nameEnteredData}
            onBlur={nameInputBlurHandler}
          ></input>
          {nameInputIsInvalid && (
            <p className="empty-error">Must not be empty</p>
          )}
        </div>
        <div>
          {" "}
          <label htmlFor="lastName-input">LastName :</label>
          <input
            type="lastName"
            id="lastName-input"
            onChange={lastNameValueChangeHandler}
            className={lastNameInputClasses}
            value={lastNameEnteredData}
            onBlur={lastNameInputBlurHandler}
          ></input>{" "}
          {lastNameInputIsInvalid && (
            <p className="empty-error">Must not be empty</p>
          )}
        </div>
        <div>
          <label htmlFor="email-input">E-mail Address:</label>
          <input
            type="text"
            id="email-input"
            onChange={emailValueChangeHandler}
            className={emailInputClasses}
            value={emailEnteredData}
            onBlur={emailInputBlurHandler}
          ></input>{" "}
          {emailInputIsInvalid && (
            <p className="empty-error">
              “Enter a valid email address, you missed the “@” character
            </p>
          )}
        </div>
        <div>
          <label htmlFor="phoneNumber-input">Phone number :</label>
          <input
            type="text"
            id="phoneNumber-input"
            onChange={phoneNumberValueChangeHandler}
            className={phoneNumberInputClasses}
            value={phoneNumberEnteredData}
            onBlur={phoneNumberInputBlurHandler}
          ></input>{" "}
          {phoneNumberInputIsInvalid && (
            <p className="empty-error">Must not be empty</p>
          )}
        </div>
        <div>
          {" "}
          <label htmlFor="mobileNumber-input">Mobile Phone number :</label>
          <input
            type="text"
            id="mobileNumber-input"
            onChange={mobileNumberValueChangeHandler}
            className={mobileNumberInputClasses}
            value={mobileNumberEnteredData}
            onBlur={mobileNumberInputBlurHandler}
          ></input>{" "}
          {mobileNumberInputIsInvalid && (
            <p className="empty-error">Must not be empty</p>
          )}
        </div>
        <div>
          {" "}
          <label htmlFor="address-input">Current Address :</label>
          <input
            type="text"
            id="address-input"
            onChange={addressValueChangeHandler}
            className={addressInputClasses}
            value={addressEnteredData}
            onBlur={addressInputBlurHandler}
          ></input>{" "}
          {addressInputIsInvalid && (
            <p className="empty-error">Must not be empty</p>
          )}
        </div>
        <div>
          <label htmlFor="date-input">Date :</label>
          <input htmlFor="date-input"></input>
        </div>
        <button disabled={!formIsValid} onClick={openHandler}>
          Submit
        </button>
        {isShown && (
          <AcountShow
            name={nameEnteredData}
            lastName={lastNameEnteredData}
            acountName={"example1"}
            acountNumber={1234567890}
            stock={123467}
            onClose={closeHandler}
          />
        )}
      </div>
    </form>
  );
};

export default Form;
