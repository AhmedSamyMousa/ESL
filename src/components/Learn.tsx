import React from "react";
import "./Learn.css";

const Learn: React.FC = () => {
  const letters = [
    "ا.jpg", "ب.jpg", "ت.jpg", "ث.jpg", "ج.jpg", "ح.jpg", "خ.jpg", "د.jpg", "ذ.jpg", "ر.jpg", "ز.jpg", "س.jpg", "ش.jpg", "ص.jpg", "ض.jpg", "ط.jpg", "ظ.jpg", "ع.jpg", "غ.jpg", "ف.jpg", "ق.jpg", "ك.jpg", "ل.jpg", "م.jpg", "ن.jpg", "ه.jpg", "و.jpg", "ي.jpg"
  ];

  return (
    <div className="learn-container">
      {letters.map((letter, index) => (
        <div className="image-card" key={index}>
          <img
            src={`/assets/ar/${letter}`}
            alt={`Sign language for ${letter}`}
            className="sign-language-image"
          />
          <p className="letter-name">{letter.split(".")[0]}</p>
        </div>
      ))}
    </div>
  );
};

export default Learn;
