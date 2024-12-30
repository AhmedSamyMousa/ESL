import React, { useEffect } from 'react';
import './Home.css';
import hello from "../assets/Hello.jpeg";
import learn from "../assets/Learn.jpeg";
import Translate from "../assets/Translate.jpeg";
import Doc from "../assets/Doc.jpeg";
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const data = {
    labels: ['Saudi Arabia', 'Egypt', 'United States', 'China', 'India'],
    datasets: [
      {
        label: 'Number of Deaf Individuals',
        data: [1000000, 2500000, 11000000, 27000000, 70000000],
        backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#f6c23e', '#e74a3b', '#6c757d'],
        borderColor: ['#2e59d9', '#17a673', '#2c9faf', '#e3bc08', '#c73d2d', '#545b62'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Region',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of People',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="Home">
      <div className="hero" data-aos="fade-in">
        <div className='hero-cont'>
          <h1 data-aos="zoom-in">Learn and Translate Egyptian Sign Language</h1>
          <p data-aos="fade-up">Learn The Egyptian Sign Language At Home or Translate It Directly</p>
          <div className="hero-btn">
            <button data-aos="flip-left">Translate Now</button>
            <button data-aos="flip-right">Learn Now</button>
          </div>
        </div>
      </div>
      <div className="question-cont" data-aos="fade-up">
        <div className="question">
          <h1>What Is Egyptian Sign Language...?</h1>
          <div className='line-cont'>
            <p>Egyptian Sign Language (ESL) is a visual language used by the Deaf community in Egypt, incorporating unique gestures and signs for communication.</p>
          </div>
        </div>
      </div>
      <div className="cards-cont" data-aos="slide-up">
        <div className="main-cards-cont">
          <div className="card" data-aos="zoom-in">
            <img src={learn} alt="Learn" />
            <div className="card-buttons">
              <button className="card-btn">Learn</button>
            </div>
          </div>
          <div className="card" data-aos="zoom-in">
            <img src={Translate} alt="Translate" />
            <div className="card-buttons">
              <button className="card-btn">Translate</button>
            </div>
          </div>
          <div className="card" data-aos="zoom-in">
            <img src={Doc} alt="Documentation" />
            <div className="card-buttons">
              <button className="card-btn">Documentation</button>
            </div>
          </div>
        </div>
      </div>
      <div className='description' data-aos="fade-in">
        <div className="desc-cont">
          <img src={hello} alt="Sign Language" className="desc-image" />
          <div className="desc-text-cont">
            <div className="desc-text">
              <p>Imagine a world where everyone can communicate freely, breaking down barriers between the hearing and deaf communities. Understanding sign language allows us to connect, share ideas, and understand each other better, fostering inclusivity and unity. By learning and using sign language, we can make a future where no one feels left out due to communication limitations.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="graph-container" data-aos="fade-up">
        <h2>Number of Deaf Individuals</h2>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Home;
