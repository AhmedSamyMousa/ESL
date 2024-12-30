import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import STT from './components/STT';
import TTS from './components/TTS';
import Learn from './components/Learn';


function App() {
  return (
    <Router>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tts" element={<TTS />} />
          <Route path="/stt" element={<STT />} />
          <Route path="/Learn" element={<Learn />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
