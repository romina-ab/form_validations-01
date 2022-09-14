import React from "react";
import Modal from "./Modal";
import classes from "./AcountShow.module.css";
import { Button } from "@mui/material";

const AcountShow = (props) => {
  const { name, lastName, onClose, acountName, acountNumber, stock } = props;
  return (
    <Modal onClick={onClose}>
      <div className={classes.cards}>
        <div className={classes.card}>
          <span>Name : </span>
          <span>{name}</span>
        </div>
        <div className={classes.card}>
          <span>Last name : </span>
          <span>{lastName}</span>
        </div>
        <div className={classes.card}>
          <span>AcountNumber : </span>
          <span>{acountName}</span>
        </div>
        <div className={classes.card}>
          <span>Stock : </span>
          <span>{stock}</span>
        </div>{" "}
        <div className={classes.card}>
          <span>AcountNumber : </span>
          <span>{acountNumber}</span>
        </div>
        <Button
          variant="contained"
          className={classes.button}
          onClick={onClose}
        >
          Close
        </Button>
      </div>
    </Modal>
  );
};

export default AcountShow;
