import { Modal } from "../genericComponents/Modal";
import "../../CSS/Modal.css";
import { SignUpModalBody } from "./SignUpModalBody";
// import { useState } from "react";
import { useDispatch } from "react-redux";
import { openModal, closeModal } from "../../store/slices/modalSlice";

export function SignUpModal() {
  const dispatch = useDispatch();

  const handleNext = () => {
    dispatch(openModal("details"));
  };

  const handleRedirect = () => {
    dispatch(openModal("login"));
  }

  return (
    <Modal
      title="Sign Up"
      body={<SignUpModalBody />}
      footer={
        <>
        <button onClick={handleNext}> Next</button>
        <div>
          Already have an account? Login 
          <span className="link-btn" onClick={() => dispatch(openModal("login"))}> here</span>
        </div>
        </>
      
      
    }
      onClose={() => dispatch(closeModal())}
    />
  );
}

