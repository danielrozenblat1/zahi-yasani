import React, { useEffect, useState } from 'react';
import styles from "./ForthScreen.module.css";
import { ChevronDown } from 'lucide-react';
import Loader from '../components/loader/Loader';

// Assuming you have these images imported
import topLeftImage from "../images/צהיי הרצאה.png";
import topRightImage from "../images/צהיי יסני תמונה ימין.jpeg";

const ForthScreen = (props) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  useEffect(() => {
    const imageUrls = [
      topLeftImage,
      topRightImage
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
        <div className={styles.imageContainer}>
          <div className={styles.topLeftImage}></div>
          <div className={styles.topRightImage}></div>
        </div>
        <div className={styles.explain}>
          הדרך לעבור שינויים אמיתיים שמגיעים מבפנים
        </div>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.descriptionWrapper}>
          <div className={styles.description}>צהיי יסני מציגה</div>
          <div className={styles.description}>״לבחור לחיות את האדם שאתה חולם להיות״</div>
        </div>
      </div>
      <div className={styles.arrowContainer}>
        <ChevronDown className={styles.bounceArrow} size={40} color="#472e1b" />
      </div>
    </div>
  );
};

export default ForthScreen;