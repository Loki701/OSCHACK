import React from 'react';
import './Button.css'; // Assuming you save the CSS in a file named Button.css

const Button = ({ title, id, toggle = true, click, bgT = false }) => {
  return (
    <a
      href={`#${id}`}
      className={`button ${toggle ? "black" : "bg-mainColor"} ${bgT ? "bgT" : ""}`}
      onClick={click}
    >
      {title}
    </a>
  );
}

export default Button;
