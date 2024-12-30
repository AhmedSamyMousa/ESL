import React, { useState} from 'react';
import './TTS.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons'; // Import the play icon

const arabicToFileMap: { [key: string]: string } = {
  'ا': 'ا.jpg',
  'ب': 'ب.jpg',
  'ت': 'ت.jpg',
  'ث': 'ث.jpg',
  'ج': 'ج.jpg',
  'ح': 'ح.jpg',
  'خ': 'خ.jpg',
  'د': 'د.jpg',
  'ذ': 'ذ.jpg',
  'ر': 'ر.jpg',
  'ز': 'ز.jpg',
  'س': 'س.jpg',
  'ش': 'ش.jpg',
  'ص': 'ص.jpg',
  'ض': 'ض.jpg',
  'ط': 'ط.jpg',
  'ظ': 'ظ.jpg',
  'ع': 'ع.jpg',
  'غ': 'غ.jpg',
  'ف': 'ف.jpg',
  'ق': 'ق.jpg',
  'ك': 'ك.jpg',
  'ل': 'ل.jpg',
  'م': 'م.jpg',
  'ن': 'ن.jpg',
  'ه': 'ه.jpg',
  'و': 'و.jpg',
  'ي': 'ي.jpg',
};

const TextToSignLanguage: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [signLanguageImages, setSignLanguageImages] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);

  const convertToSignLanguage = () => {
    setSignLanguageImages([]);
    setError(null);
    setCurrentImageIndex(null);

    if (!inputText.trim()) {
      setError('Please enter some Arabic text');
      return;
    }

    const images: string[] = [];
    const invalidChars: string[] = [];

    for (const char of inputText.trim()) {
      const normalizedChar = char.normalize('NFC');
      const signImage = arabicToFileMap[normalizedChar];

      if (signImage) {
        images.push(signImage);
      } else if (/\s/.test(normalizedChar)) {
        continue;
      } else {
        invalidChars.push(char);
      }
    }

    if (invalidChars.length > 0) {
      setError(`Invalid characters: ${invalidChars.join(', ')}`);
      return;
    }

    setSignLanguageImages(images);
  };

  const playSignLanguage = () => {
    if (signLanguageImages.length === 0) return;
    setCurrentImageIndex(0);

    let index = 0;
    const interval = setInterval(() => {
      index++;
      if (index >= signLanguageImages.length) {
        clearInterval(interval);
        setCurrentImageIndex(null);
      } else {
        setCurrentImageIndex(index);
      }
    }, 1000);
  };

  return (
    <div className="tts-container">
      <h1 className="tts-header">Arabic to Sign Language Converter</h1>
      <div className="tts-input-container">
        <input
          type="text"
          placeholder="Enter Arabic text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="tts-input"
        />
        <button onClick={convertToSignLanguage} className="tts-button">
          Convert
        </button>
        <button onClick={playSignLanguage} className="tts-button">
        <FontAwesomeIcon icon={faPlay} />
        </button>
      </div>
      {error && <div className="tts-error">{error}</div>}
      <div className="tts-images-container">
        {currentImageIndex !== null ? (
          <img
            src={`/assets/ar/${signLanguageImages[currentImageIndex]}`}
            alt="Playing sign language"
            className="tts-image tts-image-animated"
          />
        ) : (
          signLanguageImages.map((imageName, index) => (
            <img
              key={index}
              src={`/assets/ar/${imageName}`}
              alt={`Sign language for ${imageName}`}
              className="tts-image-static"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TextToSignLanguage;
