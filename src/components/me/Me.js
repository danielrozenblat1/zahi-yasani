import React from 'react';
import styles from './Me.module.css';
import claude from "../../images/צהיי יסני פרופיל.png"; // Updated image name
import image1 from "../../images/צהיי תדמית 2.png"
import image2 from "../../images/צהיי תדמית 3.png"
import image3 from "../../images/צהיי תדמית 1.png"
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
          <div className={styles.subtitle}>"חלומות גדולים לא משתפים אנשים עם חלומות קטנים"</div>
          <p className={styles.description}>
          תמיד הייתי האדם הזה שלא מפחד משינויים .
האדם הזה שמעודד אנשים להיעז ולא לתת לפחדים לשלוט במחשבות שלנו
ברור שהכל זה עניין של מה אני מספר עליי לעצמי.
ברור שהמגבלה היחידה שיש לנו זה אנחנו והמחשבות שלנו.
          </p>
          <p className={styles.description}>
          ומפה אני יוצאת איתכם למסע שמעיר ומאיר את הדרך למי לאדם שאתם מייחילים להיות
אני אראה לכם איך נוחות וויתור הם החברים הכי טובים
והפחד הוא הבונוס.
ברגע שרואים ,מכירים ומרגישים את זה ניתן לעבוד על זה.
בואו לחיות את האדם שאתם חולמים להיות.
אל תבזבזו זמן ואנרגייה על מתי,איך ,למה כמה פשוט תעשו את הצעד
          </p>
        </div>
  
      </div>
      <div className={styles.workshopsSection}>
        <h2 className={styles.workshopTitle}>הרצתי והעברתי מאות אנשים תהליכים משני חיים</h2>
        <div className={styles.imagesContainer}>
          <img src={image1} alt="סדנה 1" className={styles.workshopImage} />
          <img src={image2} alt="סדנה 2" className={styles.workshopImage} />
          <img src={image3} alt="סדנה 2" className={styles.workshopImage} />
        </div>
      </div>
      <Recommends/>
    </>
  );
};

export default AboutMe;