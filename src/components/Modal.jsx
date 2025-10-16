import Button from "./Button";

const Modal = ({ isOpen, onClose, rating }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Thank You!</h2>
        <p>
          You rated us {rating} star{rating > 1 ? "s" : ""}
        </p>
        <Button onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  );
};

export default Modal;
