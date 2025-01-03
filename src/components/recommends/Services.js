import React from 'react';
import styles from './Services.module.css';
import Button from '../button/Button';

import result1 from "../../images/צהיי שירותים 1.png";
import result2 from "../../images/צהיי שירותים 2.png";
import result3 from "../../images/צהיי שירותים 3.png";
import result4 from "../../images/צהיי שירותים 4.png";
import result10 from "../../images/צהיי נאום.png";
import result5 from "../../images/צהיי שירותים 5.png";
import result6 from "../../images/צהיי שירותים 6.png";
import result7 from "../../images/צהיי שירותים 7.png";
import result8 from "../../images/צהיי שירותים 8.png";
import result9 from "../../images/צהיי ערב נשים.jpeg";
const Services = () => {
  const images = [
    result1, result2, result3, result4,result10,
    result5, result6, result7, result8,result9
  ];

  return (
    <>
      <div className={styles.explain}>ללא יוצא מן הכלל - כל השירותים שלי</div>
      <div className={styles.title}>פשוט שונים!</div>
      <div className={styles.explain}>אווירה ייחודית שמותאמת לכל אירוע ושירות,והתאמה של התוכן לכל אדם,קבוצה וקהילה שמגיעים אלי - מוזמנים לעיין בחלק מהאירועים</div>
      <div className={styles.container}>
        <div className={styles.scrollTrack}>
          {/* קבוצה ראשונה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`first-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`שמחה לוי תלמידה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
          {/* קבוצה שנייה זהה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`second-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`צהיי יסני תלמידה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Button text="צהיי, בואי נדבר!" />
    </>
  );
};

export default Services;