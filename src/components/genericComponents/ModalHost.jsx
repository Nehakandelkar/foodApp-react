import { useSelector } from "react-redux";
import { Modal } from "../genericComponents/Modal";
import { LoginModal } from "../auth/LoginModal";
import { DetailsModal } from "../auth/DetailsModal";


export function ModalHost() {
  const { isOpen, modalType } = useSelector((state) => state.modal);

  if (!isOpen) return null;

  let content = null;

  if (modalType === "login") content = <LoginModal />;
  if (modalType === "details") content = <DetailsModal />;

  return <Modal>{content}</Modal>;
}
