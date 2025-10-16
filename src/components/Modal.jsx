const Modal = ({ isOpen, onClose, rating }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Thank You!</h2>
        <p>
          You rated us {rating} star{rating > 1 ? "s" : ""}
        </p>
        <button onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
