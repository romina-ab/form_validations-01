import { useState } from "react";
const useInput = (validateData) => {
  const [enteredData, setEnteredData] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  //const enteredDataIsValid = enteredData.trim() !== "";
  const enteredDataIsValid = validateData(enteredData);
  const inputIsInvalid = !enteredDataIsValid && isTouched;

  const valueChangeHandler = (e) => {
    setEnteredData(e.target.value);
  };

  const inputBlurHandler = (e) => {
    setIsTouched(true);
  };
  const reset = () => {
    setIsTouched(false);
    setEnteredData("");
  };
  return {
    enteredData,
    inputIsInvalid,
    valueChangeHandler,
    inputBlurHandler,
    enteredDataIsValid,
    isTouched,
    reset,
  };
};
export default useInput;
