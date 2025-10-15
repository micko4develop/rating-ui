import { useState } from "react";
import Star from "./Star";
import Modal from "./Modal";

const Rating = ({
  heading = "Rate Your Experience",
  color = "gold",
  feedbackMessages = ["Terrible", "Poor", "Fair", "Good", "Excellent"],
}) => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const clicked = (index) => {
    setRating(index);
  };

  const handleSubmit = () => {
    if (rating > 0) {
      setSubmitted(true);
    }
  };

  return (
    <div className="rating-container">
      <h2>{heading}</h2>
      <div className="stars">
        {stars.map((star, index) => (
          <Star
            key={star}
            star={star}
            rating={rating}
            hover={hover}
            color={color}
            onClick={() => clicked(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
          />
        ))}
      </div>
      {rating > 0 && <p className="feedback">{feedbackMessages[rating - 1]}</p>}
      <button
        onClick={handleSubmit}
        className="submit-btn"
        disabled={rating === 0}
      >
        Submit
      </button>

      <Modal isOpen={submitted} onClose={() => setSubmitted(false)}>
        <h2>Thank You!</h2>
        <p>
          You rated us {rating} star{rating > 1 ? "s" : ""}
        </p>
        <button onClick={() => {setSubmitted(false); setRating(0)}}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default Rating;
