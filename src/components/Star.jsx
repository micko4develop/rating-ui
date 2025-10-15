export default function Star({
  star,
  rating,
  hover,
  color,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <span
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="star"
      style={{ color: star <= (hover || rating) ? color : "#ccc" }}
    >
      {"\u2605"}
    </span>
  );
}
