import { useEffect } from "react";
import styles from "./FirstScreen.module.css"
import ScrollReveal from "scrollreveal"
import { ChevronDown } from "lucide-react";
const FirstScreen = (props) => {

    useEffect(()=>{
        ScrollReveal().reveal(`.${styles.left}`, {
            duration: 1000,
            distance: "30px",
            origin: "left", // Start from the right side
            easing: "ease-out",
            reset:false,
            viewFactor: 0.2,
            interval: 500, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
          ScrollReveal().reveal(`.${styles.right}`, {
            duration: 1000,
            distance: "30px",
            origin: "right", // Start from the right side
            easing: "ease-out",
            reset:false,
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
        
   
      },[])
    return (
        <div className={props.scrolled ? styles.containerP : styles.container}>
            <div className={styles.descriptionWrapper}>
                <div className={styles.description}>מרגישים שאתם צריכים לעשות שינוי ולא יודעים מאיפה להתחיל?</div>
            </div>
            
            <div className={styles.description}>אני מכירה את התחושה הזו! לדעת שיש בכם יותר אבל משהו עוצר אתכם בכל פעם מחדש</div>
            <div className={styles.description}>ואז מגיעים משפטים כמו :</div>
            
            <div className={styles.quates}>
                <div className={`${styles.quate} ${styles.left}`}>"שינוי באמצע החיים זה באמת אפשרי בשבילי ?"</div>
                <div className={`${styles.quate} ${styles.right}`}>"כבר מאוחר מדי להתחיל לעשות משהו בנוגע לזה"</div>
            </div>

            <div className={styles.quates}>
                <div className={`${styles.quate} ${styles.left}`}>"אני רוצה להתחיל לשנות דברים אבל אני במקום נוח"</div>
                <div className={`${styles.quate} ${styles.right}`}>"ברגע שאתגבר על (התירוץ הזמני) הכל יתחיל להשתנות"</div>
            </div>
            <div className={styles.description}>כמנחה להתפתחות אישית ומייסדת מרחב "תבחרי לחיות את האישה שאת חולמת להיות", אני ממוקדת בהענקת כלים מעשיים ומעמיקים שמאפשרים לכל אחת ואחד לממש את הפוטנציאל האישי שלהם.  <br/> אני מאמינה שכל אדם נושא בתוכו את הכוח לשינוי, לי יש את הידע והניסיון להנחות אתכם בדרך זו.</div>
            <div className={styles.title}>אני כאן כדי לעזור לכם לסלול את הדרך לשינוי</div>
            <div className={styles.arrowContainer}>
        <ChevronDown className={styles.bounceArrow}  strokeWidth={1} size={40} />
      </div>
        </div>
    )
}

export default FirstScreen