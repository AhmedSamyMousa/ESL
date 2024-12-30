import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

// Import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Nav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    localStorage.getItem('theme') === 'dark' || false
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Apply the correct theme class to the body
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
    // Save the theme in localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-logo">
          <h1>ESL</h1>
        </div>

        <div className="navbar-buttons">
          <Link to="/" className="home btn">Home</Link>
          <Link to="/tts" className="tts btn">Text to Sign</Link>
          <Link to="/stt" className="stt btn">Sign to Text</Link>
          <Link to="/Learn" className="learn btn">Learn</Link>
        </div>

        <a
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle Theme"
        >
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
