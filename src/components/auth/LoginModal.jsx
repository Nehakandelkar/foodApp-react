import { Modal } from "../genericComponents/Modal";
import "../../CSS/Modal.css";
import { LoginModalBody } from "./LoginModalBody";
// import { useState } from "react";
import { useDispatch } from "react-redux";
import { openModal, closeModal } from "../../store/slices/modalSlice";

export function LoginModal() {
  const dispatch = useDispatch();

  const handleNext = () => {
    dispatch(openModal("details"));
  };

  return (
    <Modal
      title="Login"
      body={<LoginModalBody />}
      footer={<button onClick={handleNext}> Next</button>}
      onClose={() => dispatch(closeModal())}
    />
  );
}

