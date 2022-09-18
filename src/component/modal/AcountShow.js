import React from "react";
import Modal from "./Modal";
import classes from "./AcountShow.module.css";
import { Button } from "@mui/material";
import "../Form/Form.css";

const AcountShow = (props) => {
  const { name, lastName, onClose, acountName, acountNumber, stock } = props;
  return (
    <Modal onClick={onClose}>
      <div className={classes.cards}>
        <div className={classes.card}>
          <span>نام : </span>
          <span>{name}</span>
        </div>
        <div className={classes.card}>
          <span>نام خانوادگی : </span>
          <span>{lastName}</span>
        </div>
        <div className={classes.card}>
          <span>نام حساب : </span>
          <span>{acountName}</span>
        </div>
        <div className={classes.card}>
          <span>شماره حساب : </span>
          <span>{stock}</span>
        </div>{" "}
        <div className={classes.card}>
          <span>موجودی حساب : </span>
          <span>{acountNumber}</span>
        </div>
        <Button variant="contained" onClick={onClose} className="buttonHandler">
          بستن
        </Button>
      </div>
    </Modal>
  );
};

export default AcountShow;
