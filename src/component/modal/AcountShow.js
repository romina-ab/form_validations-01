import React from "react";
import useInput from "../../hooks/use-input";
import Form from "../form/Form";
import classes from "./AcountShow.module.css";
import Modal from "./Modal";

const AcountShow = (props) => {

  return (
    <Modal>
      <div>
        <p>{props.name}</p>
      </div>
    </Modal>
  );
};

export default AcountShow;
