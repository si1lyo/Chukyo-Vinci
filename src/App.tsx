import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrialForm from './components/TrialForm';
import Footer from './components/Footer';
import Activities from './components/Activities';
import Members from './components/Member';
import Promotion from './components/Promotion';
import SNS from './components/SNS';
import PhotoGallery from './components/PhotoGallery';
import NextActivity from './components/NextActivity';
import './App.css';

// スクロール処理を行うコンポーネント
const ScrollToHash: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  return null;
};

function App() {
  return (
    <Router>
      <div className="App bg-black min-h-screen">
        <Navbar />
        <ScrollToHash />
        <Routes>
          <Route path="/" element={
            <>
            <div id="hero">
              <Hero/>
              </div>
              <div id="gallery">
                <PhotoGallery />
              </div>
              
              <div id="activities">
                <Activities />
              </div><div id="sns">
                <SNS />
              </div>
              <div id="members">
                <Members />
              </div>
              
              <div id="promotion">
                <Promotion />
              </div>
            </>
          } />
          <Route path="/trial" element={<TrialForm />} />
          <Route path="/next-activity" element={<NextActivity />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
