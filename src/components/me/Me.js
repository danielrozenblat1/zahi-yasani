import React from 'react';
import styles from './Me.module.css';
import claude from "../../images/צהיי יסני תדמית.png"; // Updated image name
import image1 from "../../images/צהיי הרצאה.png"
import image2 from "../../images/צהיי סדנה.png"
import Recommends from '../recommends/Recommends';
const AboutMe = () => {
  return (
    <>
      <div className={styles.header} id="מי אני">נעים מאוד</div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={claude} alt="יסני" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>צהיי יסני</h1>
          <div className={styles.subtitle}>"חלומות גדולים לא משקפים אנשים עם חלומות קטנים"</div>
          <p className={styles.description}>
            אני בן אדם שתמיד חשב בגדול , הרגשתי שאני תמיד נמצאת במקום שאני צריכה להוכיח את עצמי ושיש בי יותר ממה שרואים ונמאס לי!
          </p>
          <p className={styles.description}>
            החלטתי לא לתת לנוחות ולפחד מקום ולעשות שינוי!
            החלטתי שאני רוצה להתחיל להתחיל ללוות אנשים להתגבר על הפחדים שלהם ולצאת לדרך חדשה בחיים שלהם.
            אני מאמינה תמיד שאסור לחכות למשבר כדי לעשות שינוי.
          </p>
        </div>
  
      </div>
      <div className={styles.workshopsSection}>
        <h2 className={styles.workshopTitle}>הרצתי והעברתי מאות אנשים תהליכים משני חיים</h2>
        <div className={styles.imagesContainer}>
          <img src={image1} alt="סדנה 1" className={styles.workshopImage} />
          <img src={image2} alt="סדנה 2" className={styles.workshopImage} />
        </div>
      </div>
      <Recommends/>
    </>
  );
};

export default AboutMe;