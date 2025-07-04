import React, { useEffect, useState } from 'react';
import styles from "./ForthScreen.module.css";
import { ChevronDown } from 'lucide-react';
import Loader from '../components/loader/Loader';
import logo from "../images/צהיי יסני לוגו חדש.png"
// Assuming you have these images imported
import topLeftImage from "../images/צהיי הרצאה.png";
import topRightImage from "../images/צהיי יסני תמונה ימין.jpeg";

const ForthScreen = (props) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  useEffect(() => {
    const imageUrls = [
      topLeftImage,
      topRightImage,
      logo
    ];

    const loadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
      });
    };

    Promise.all(imageUrls.map(loadImage))
      .then(() => setImagesLoaded(true))
      .catch((err) => console.error("Failed to load images", err));
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const topLeftElement = document.querySelector(`.${styles.topLeftImage}`);
      const topRightElement = document.querySelector(`.${styles.topRightImage}`);
      
      if (topLeftElement && topRightElement) {
        topLeftElement.style.transform = `rotate(-20deg) translateY(${scrollY * 0.1}px)`;
        topRightElement.style.transform = `rotate(20deg) translateY(${scrollY * 0.1}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [imagesLoaded]);

  if (!imagesLoaded) {
    return <Loader />;
  }

  return (
    <div className={props.scrolled ? styles.containerP : styles.container}>
      <div className={styles.explainContainer}>
  
        <div className={styles.explain}>
        העתיד שלך מתחיל היום
        </div>
      </div>
      <img className={styles.image} src={logo}/>

      <div className={styles.arrowContainer}>
        <ChevronDown className={styles.bounceArrow} size={40} color="#472e1b" />
      </div>
    </div>
  );
};

export default ForthScreen;