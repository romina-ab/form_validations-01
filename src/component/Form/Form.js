import { Button } from "@mui/material";
import { useState } from "react";
import useInput from "../../hooks/use-input";
import AcountShow from "../modal/AcountShow";
import "./Form.css";
import * as React from "react";
import TextField from "@mui/material/TextField";
import JalaliDatePicker from "../DateTest";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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



  const {
    enteredData: nameEnteredData,
    reset: nameReset,
    inputIsInvalid: nameInputIsInvalid,
    enteredDataIsValid: nameEnteredDataIsValid,
    valueChangeHandler: nameValueChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    popUpError
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
    toast.success("ثبت شد !", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      rtl:true,
    });
  };

  return (
    <form className="form-container" onSubmit={submitHandler}>
      <div>
        <div dir="rtl">
          <TextField
            sx={{ margin: "1rem 0", textAlign: "right" }}
            id="name-input"
            label="نام"
            multiline
            onChange={nameValueChangeHandler}
            className={nameInputClasses}
            value={nameEnteredData}
            onBlur={nameInputBlurHandler}
            fullWidth
            
          />
          {nameInputIsInvalid && (
            <p className="empty-error">
              Name Input can not contains numbers or signs or be empty!
            </p>
          )}
        </div>
        <div>
          <TextField
            sx={{ margin: "1rem 0" }}
            label="نام خانوادگی"
            multiline
            fullWidth
            id="lastName-input"
            onChange={lastNameValueChangeHandler}
            className={lastNameInputClasses}
            value={lastNameEnteredData}
            onBlur={lastNameInputBlurHandler}
          />
          {lastNameInputIsInvalid && (
            <p className="empty-error">
              LastName Input can not contains numbers or signs or be empty!
            </p>
          )}
        </div>
        <div>
          <TextField
            sx={{ margin: "1rem 0" }}
            label="پست الکترونیک"
            multiline
            fullWidth
            type="email"
            id="email-input"
            onChange={emailValueChangeHandler}
            className={emailInputClasses}
            value={emailEnteredData}
            onBlur={emailInputBlurHandler}
          />
          {emailInputIsInvalid && (
            <p className="empty-error">
              E-mail Input should be valid and not be empty!
            </p>
          )}
        </div>
        <div>
          <TextField
            sx={{ margin: "1rem 0" }}
            label="شماره تلفن ثابت"
            multiline
            fullWidth
            id="phoneNumber-input"
            onChange={phoneNumberValueChangeHandler}
            className={phoneNumberInputClasses}
            value={phoneNumberEnteredData}
            onBlur={phoneNumberInputBlurHandler}
          />
          {phoneNumberInputIsInvalid && (
            <p className="empty-error">Phone number is not valid!</p>
          )}
        </div>
        <div>
          <TextField
            sx={{ margin: "1rem 0" }}
            label="شماره تلفن همراه"
            multiline
            fullWidth
            id="mobileNumber-input"
            onChange={mobileNumberValueChangeHandler}
            className={mobileNumberInputClasses}
            value={mobileNumberEnteredData}
            onBlur={mobileNumberInputBlurHandler}
          />
          {mobileNumberInputIsInvalid && (
            <p className="empty-error">Mobile phone number is not valid!</p>
          )}
        </div>
        <div>
          <TextField
            sx={{ margin: "1rem 0" }}
            label="نشانی منزل"
            multiline
            fullWidth
            id="address-input"
            onChange={addressValueChangeHandler}
            className={addressInputClasses}
            value={addressEnteredData}
            onBlur={addressInputBlurHandler}
          />
          {addressInputIsInvalid && (
            <p className="empty-error">Must not be empty</p>
          )}
        </div>
        <div className="inputs">
          <JalaliDatePicker />
        </div>

        <Button
          variant="contained"
          disabled={!formIsValid}
          onClick={openHandler}
          className="buttonHandler"

        >
          ثبت
        </Button>
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
