import "../../CSS/Modal.css";

export function Modal({ title, body, footer, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-container">

        {/* HEADER */}
        <div className="modal-header">
          <div className="modal-title">{title}</div>
          <div className="close-icon" onClick={onClose}>x</div>
        </div>

        {/* BODY */}
        <div className="modal-body">
          {body}
        </div>

        {/* FOOTER */}
        <div className="modal-footer">
          {footer}
        </div>

      </div>
    </div>
  );
}
