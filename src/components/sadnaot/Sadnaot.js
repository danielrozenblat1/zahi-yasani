import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './Sadnaot.module.css';
import Button from '../button/Button';

// Personal Coaching Images
import personalImage1 from "../../images/צהיי סדנאות קבוצתיות 1.jpeg";
import personalImage2 from "../../images/צהיי סדנאות קבוצתיות 2.jpeg";
// Resilience Workshop Images
import resilienceImage1 from "../../images/צהיי סדנאות קבוצתיות 2.jpeg";
import resilienceImage2 from "../../images/צהיי סדנאות קבוצתיות 1.jpeg";

// Family Coaching Images
import familyImage1 from "../../videos/צהיי ערב משפחה.mp4";
import familyImage2 from "../../images/צהי ערב משפחה 1.jpeg";

// Lectures Images
import lectureImage1 from "../../images/צהיי הרצאה.png";
import lectureImage2 from "../../images/צהיי הרצאות 2.jpg";

// Community Service Images
import communityImage1 from "../../images/צהיי ערב חוסן 1.jpeg";
import communityImage2 from "../../images/צהיי ערב חוסן.jpeg";

// Service Icons
import personalIcon from "../../images/אימון אישי.png";  // Image 1
import resilienceIcon from "../../images/ייעוץ לארגונים.png";      // Image 2
import familyIcon from "../../images/אימון משפחה.png";              // Image 3
import communityIcon from "../../images/ייעוץ לקהילות.png";        // Image 4
import lectureIcon from "../../images/הרצאות.png";            // Image 5

const CourseBox = ({ title, subtitle, sessions, message, images, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.courseWrapper}>
      <button 
        className={`${styles.courseButton} ${isOpen ? styles.active : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.buttonContent}>
          <div className={styles.titleWithIcon}>
            <img 
              src={icon} 
              alt={`${title} icon`}
              className={styles.serviceIcon}
              width="24"
              height="24"
            />
            <h2 className={styles.mainTitle}>
              {title}
              <span className={styles.subtitle}>{subtitle}</span>
            </h2>
          </div>
          <ChevronDown 
            className={`${styles.chevron} ${isOpen ? styles.rotate : ''}`}
          />
        </div>
      </button>
      
      <div className={`${styles.contentWrapper} ${isOpen ? styles.open : ''}`}>
        <div className={styles.meetingsContainer}>
          <div className={styles.innerContentWrapper}>
            {sessions.map((session, index) => (
              <div key={index} className={styles.meetingBox}>
                <div className={styles.meetingHeader}>
                  <h3 className={styles.meetingTitle}>{session.title}</h3>
                </div>
                <ul className={styles.detailsList}>
                  {session.details.map((detail, idx) => (
                    <li key={idx} className={styles.detailItem}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {images && images.length > 0 && (
              <div className={styles.imagesSection}>
                <h3 className={styles.imagesTitle}>טעימה מ{title}</h3>
                <div className={styles.imagesRow}>
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${title} - תמונה ${index + 1}`}
                      className={styles.serviceImage}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className={styles.buttonContainer}>
              <Button
                text="עוד פרטים"
                message={message}
                className={styles.contactButton}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Courses = () => {
  const personalCoaching = {
    title: "אימון פרטני להתפתחות אישית",
    subtitle: "אחת על אחת - שישה מפגשים של 60 דקות",
    message: "היי, אשמח לשמוע עוד פרטים על אימון פרטני להתפתחות אישית",
    images: [personalImage1, personalImage2],
    icon: personalIcon,
    sessions: [
      {
        title: "צהיי, למה שאצטרך אימון אישי?",
        details: [
          "התהליך אישי וממוקד אך ורק בך!",
          "פתרון תחושות תקיעות וקושי בעשיית שינויים",
          "התמודדות עם פחדים ויציאה מאזור הנוחות",
          "התמודדות עם אתגרי היום יום",
          "התמודדות עם חוסר ודאות והלא נודע",
          "חיזוק האמונה העצמית והביטחון העצמי",
          "טיפול בפחדים שמנהלים ומקרקעים אותך",
          "עבודה על נראות, תחושות וריצוי הסביבה",
          "פתרון תקיעות בזוגיות ועבודה על פחדים עמוקים"
        ]
      }
    ]
  };

  const resilience = {
    title: "סדנאות חוסן אישי וקהילתי",
    subtitle: "לרשויות, עמותות וארגוני הייטק",
    message: "היי, אשמח לשמוע עוד פרטים על סדנאות חוסן אישי וקהילתי",
    images: [resilienceImage1, lectureImage2, resilienceImage2],
    icon: resilienceIcon,
    sessions: [
      {
        title: "מה כוללות הסדנאות?",
        details: [
          "שיפור דינמיקה קבוצתית בארגון",
          "פיתוח חוסן אישי וקהילתי",
          "התחברות לרגשות וחיזוק החוסן הנפשי",
          "ייעוץ וליווי לבניית חזון העמותה",
          "התאמה אישית לצרכי הארגון",
          " 8 מפגשים של שעה וחצי כל מפגש",
          "קבוצות של 10-15 משתתפים"
        ]
      }
    ]
  };

  const familyCoaching = {
    title: "אימון משפחתי - משפחה כן בוחרים",
    subtitle: " 8 מפגשים של שעה לחיזוק הדינמיקה המשפחתית",
    message: "היי, אשמח לשמוע עוד פרטים על אימון משפחתי",
    images: [familyImage2],
    icon: familyIcon,
    sessions: [
      {
        title: "צהיי, המשפחה שלי על פניו בסדר גמור, למה שנצטרך אימון משפחתי?",
        details: [
          "שיפור הדינמיקה המשפחתית והקשרים בין בני המשפחה",
          "למידה כיצד לקבל את כל בני המשפחה",
          "פיתוח הבנה והיכרות עמוקה יותר בין בני המשפחה",
          "מתן מקום וביטוי לכל אחד מבני המשפחה",
          "חשוב להבין - זה לא טיפול - אלא עבודה על דינמיקה משפחתית"
        ]
      }
    ]
  };

  const lectures = {
    title: "הרצאות",
    subtitle: "2  הרצאות אינטראקטיביות הכוללות את הסיפור האישי שלי",
    message: "היי, אשמח לשמוע עוד פרטים על ההרצאות",
    images: [lectureImage1, lectureImage2],
    icon: lectureIcon,
    sessions: [
      {
        title: "1. המשפחה מתמודדת",
        details: [
          "הרצאה המבוססת על סיפור אישי (מתמודד נפש במשפחה)",
          "ההרצאה נותנת כלים להתמודדות משפחתית",
          "משך ההרצאה שעה וחצי",
          "ההרצאה כוללת דיאלוג פתוח עם הקהל"
        ]
      },
      {
        title: '2 ."לחיות את האישה שאת חולמת להיות"',
        details: [
          "הרצאה משנת חיים על התפתחות אישית ומימוש עצמי",
          "בהרצאה כל אחת תקבל כלים לחיות את החלומות שלה ולא של אחרים",
          "משך ההרצאה שעה וחצי",
          "ההרצאה כוללת דיאלוג פתוח עם הקהל",
            "מתאים במיוחד ליום האישה, לארגוני 'קידום מעמד האישה' , לארגוני נשים,לכנסים"
        ]
      }
    ]
  };

  const communityService = {
    title: "ליווי קהילות",
    subtitle: "שירותי ייעוץ לקהילות",
    message: "היי, אשמח לשמוע עוד פרטים על שירותי ליווי קהילות",
    images: [communityImage1, communityImage2],
    icon: communityIcon,
    sessions: [
      {
        title: "שירותי הליווי כוללים",
        details: [
          "ייעוץ לאיחוד קהילתי",
          "שיפור הדינמיקה בקהילה",
          "בניית תכנית פעולה קהילתית",
          "ליווי מותאם לצרכי הקהילה",
          "שעות ייעוץ"
        ]
      }
    ]
  };

  return (
    <>
      <div className={styles.title}  id="השירותים שלי">השירותים שלי</div>
      <div className={styles.description}>
        יש הרבה דרכים וצורות לגרום לשינוי! לחצו על כל שירות כדי לראות מה הוא מכיל, קצת ממה שקורה בו והבינו איך אתם מעדיפים לפגוש אותי
      </div>
      <div className={styles.container} dir="rtl">
        <CourseBox {...personalCoaching} />
        <CourseBox {...resilience} />
        <CourseBox {...familyCoaching} />
        <CourseBox {...lectures} />
        <CourseBox {...communityService} />
      </div>
    </>
  );
};

export default Courses;