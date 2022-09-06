import { useState } from "react";
import useInput from "../../hooks/use-input";
import AcountShow from "../modal/AcountShow";
import "./Form.css";
const Form = (props) => {
  let formIsValid = true;

  const [isShown, setIsShown] = useState(false);

  let emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  let namePattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  let lastNamePattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  let phoneNumberPattern =
    /^((|0|98|098|0098|\\+98)[1-8][1-9][2-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9])$/;
  let mobileNumberPattern =
    /^(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}$/;

  let addressPattern = "address";
  const {
    enteredData: nameEnteredData,
    reset: nameReset,
    inputIsInvalid: nameInputIsInvalid,
    enteredDataIsValid: nameEnteredDataIsValid,
    valueChangeHandler: nameValueChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
  } = useInput((nameEnteredData) => namePattern.test(nameEnteredData));
  const nameInputClasses = nameInputIsInvalid ? "invalid" : "";

  const {
    enteredData: emailEnteredData,
    reset: emailReset,
    inputIsInvalid: emailInputIsInvalid,
    enteredDataIsValid: emailEnteredDataIsValid,
    valueChangeHandler: emailValueChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
  } = useInput((emailEnteredData) => emailPattern.test(emailEnteredData));
  const emailInputClasses = emailInputIsInvalid ? "invalid" : "";

  const {
    enteredData: lastNameEnteredData,
    reset: lastNameReset,
    inputIsInvalid: lastNameInputIsInvalid,
    enteredDataIsValid: lastNameEnteredDataIsValid,
    valueChangeHandler: lastNameValueChangeHandler,
    inputBlurHandler: lastNameInputBlurHandler,
  } = useInput((lastNameEnteredData) =>
    lastNamePattern.test(lastNameEnteredData)
  );
  const lastNameInputClasses = lastNameInputIsInvalid ? "invalid" : "";

  const {
    enteredData: phoneNumberEnteredData,
    reset: phoneNumberReset,
    inputIsInvalid: phoneNumberInputIsInvalid,
    enteredDataIsValid: phoneNumberEnteredDataIsValid,
    valueChangeHandler: phoneNumberValueChangeHandler,
    inputBlurHandler: phoneNumberInputBlurHandler,
  } = useInput((phoneNumberEnteredData) =>
    phoneNumberPattern.test(phoneNumberEnteredData)
  );
  const phoneNumberInputClasses = phoneNumberInputIsInvalid ? "invalid" : "";

  const {
    enteredData: mobileNumberEnteredData,
    reset: mobileNumberReset,
    inputIsInvalid: mobileNumberInputIsInvalid,
    enteredDataIsValid: mobileNumberEnteredDataIsValid,
    valueChangeHandler: mobileNumberValueChangeHandler,
    inputBlurHandler: mobileNumberInputBlurHandler,
  } = useInput((mobileNumberEnteredData) =>
    mobileNumberPattern.test(mobileNumberEnteredData)
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
            <p className="empty-error">
              Name Input can not contains numbers or signs or be empty!
            </p>
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
            <p className="empty-error">
              LastName Input can not contains numbers or signs or be empty!
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email-input">E-mail Address:</label>
          <input
            type="email"
            id="email-input"
            onChange={emailValueChangeHandler}
            className={emailInputClasses}
            value={emailEnteredData}
            onBlur={emailInputBlurHandler}
          ></input>{" "}
          {emailInputIsInvalid && (
            <p className="empty-error">
              E-mail Input should be valid and not be empty!
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
            <p className="empty-error">Phone number is not valid!</p>
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
            <p className="empty-error">Mobile phone number is not valid!</p>
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
