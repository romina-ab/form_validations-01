import React from "react";
import Form from "../form/Form";
import classes from "./AcountShow.module.css";
import Modal from "./Modal";

const AcountShow = (props) => {
  return (
    <Modal>
      <div className={classes.container}>
        <div className={classes.total}>
          <div><Form/></div>
        </div>
        <div className={classes.button} onClick={props.onClose}>close</div>
      </div>
    </Modal>
  );
};

export default AcountShow;
