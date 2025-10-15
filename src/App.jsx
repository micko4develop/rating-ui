import Rating from "./components/Rating";
import { useState } from "react";

const App = () => {
  return (
    <div>
      <Rating
        heading="How do you feel ?"
        color="skyblue"
        feedbackMessages={[
          "Hate it",
          "Dislike it",
          "Meh",
          "Like it",
          "Love it",
        ]}
      />
    </div>
  );
};

export default App;
