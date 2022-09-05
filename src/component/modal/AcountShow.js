import React from "react";
import Modal from "./Modal";
import classes from "./AcountShow.module.css"

const AcountShow = (props) => {
  const {name, lastName} = props;
  return (
    <Modal onClick={props.onClose}>
      <div>
        <p>{name}</p>
        <p>{lastName}</p>
        <button  className={classes.button} onClick={props.onClose}>
            close
          </button>
      </div>
    </Modal>
  );
};

export default AcountShow;
