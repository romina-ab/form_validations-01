import useInput from "../../hooks/use-input";

import "./Form.css";
const Form = (props) => {
  let formIsValid = false;
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
    enteredData: adressEnteredData,
    reset: adressReset,
    inputIsInvalid: adressInputIsInvalid,
    enteredDataIsValid: adressEnteredDataIsValid,
    valueChangeHandler: adressValueChangeHandler,
    inputBlurHandler: adressInputBlurHandler,
  } = useInput((adressEnteredData) => adressEnteredData.trim() !== "");
  const adressInputClasses = adressInputIsInvalid ? "invalid" : "";
  if (
    nameEnteredDataIsValid &&
    emailEnteredDataIsValid &&
    lastNameEnteredDataIsValid &&
    phoneNumberEnteredDataIsValid &&
    mobileNumberEnteredDataIsValid &&
    adressEnteredDataIsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log(nameEnteredData);
    console.log(emailEnteredData);
    nameReset();
    lastNameReset();
    emailReset();
    phoneNumberReset();
    mobileNumberReset();
    adressReset();
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
            <label htmlFor="email-input">Email adress:</label>
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
            <label htmlFor="mobileNumber-input">Mobile number :</label>
            <input
              type="number"
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
            <label htmlFor="adress-input">Adress :</label>
            <input
              type="text"
              id="adress-input"
              onChange={adressValueChangeHandler}
              className={adressInputClasses}
              value={adressEnteredData}
              onBlur={adressInputBlurHandler}
            ></input>{" "}
            {adressInputIsInvalid && (
              <p className="empty-error">Must not be empty</p>
            )}
          </div>
          <button type="submit" disabled={!formIsValid} onClick={props.onShow} >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
