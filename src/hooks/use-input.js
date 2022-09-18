import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useInput = (validateData) => {
  const [enteredData, setEnteredData] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  //const enteredDataIsValid = enteredData.trim() !== "";
  const enteredDataIsValid = validateData(enteredData);
  const inputIsInvalid = !enteredDataIsValid && isTouched;




  const popUpError = () => {
    !enteredDataIsValid &&
      toast.error("🦄 Wow so easy!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  };

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
    popUpError,
  };
};
export default useInput;
