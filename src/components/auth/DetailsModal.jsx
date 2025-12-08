import { Modal } from "../genericComponents/Modal";
import { DetailsModalBody } from "./DetailsModalBody";
import { closeModal } from "../../store/slices/modalSlice";
import { useDispatch } from "react-redux";
// import { useState } from "react";

export function DetailsModal() {
  const dispatch = useDispatch();
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");

  return (
    <Modal
      title="Complete Your Profile"
      body={<DetailsModalBody 
        // setName={setName} 
        // setPhone={setPhone} 
        // setAddress={setAddress}
         />}
      footer={<button onClick={() => dispatch(closeModal())}>Submit</button>}
      onClose={() => dispatch(closeModal())}
    />
  );
}
