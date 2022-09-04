import { useState } from "react";
const useInput = (validateData) => {
  const [enteredData, setEnteredData] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  //const enteredDataIsValid = enteredData.trim() !== "";
  const enteredDataIsValid = validateData(enteredData);
  const inputIsInvalid = !enteredDataIsValid && isTouched;

  const changeHandler = (e) => {
    setEnteredData(e.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };
  return {
    data: enteredData,
    inputIsInvalid: inputIsInvalid,
    changeHandler,
    inputBlurHandler,
  };
};
export default useInput;
