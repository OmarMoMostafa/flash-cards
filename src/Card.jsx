import React, { useState } from "react";

function Card({ question }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className={`card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped((f) => !f)}
    >
      {flipped ? question.answer : question.question}
    </div>
  );
}

export default Card;
