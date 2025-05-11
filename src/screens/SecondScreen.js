import { AlertCircle, ChevronDown } from "lucide-react"
import Button from "../components/button/Button"
import styles from "./SecondScreen.module.css"

const SecondScreen=()=>{


    return <>
        

<div className={styles.title}>חשוב לי לומר</div>
<div className={styles.alert}><AlertCircle></AlertCircle> <div className={styles.scare}>התפתחות ושינוי לא מגיעים ביום</div> <AlertCircle></AlertCircle></div>
<div className={styles.description}>תמיד יש מה לשפר ולאן להתפתח אבל אם לא נעשה את הצעד הראשון אז בחיים לא נגיע למקום שאנחנו רוצים להגיע אליו</div>

            <div className={styles.description}>
                הדרך להצלחה מתחילה בצעדים קטנים, ואני כאן ללוות אותך בכל שלב
            </div>
            <div className={styles.description}>
במרחב שלי, נערות ונשים ימצאו סביבה בטוחה ומחזקת, שבהן יוכלו לחקור את חלומותיהן, להתמודד עם אתגרים ולפתח את היכולות הייחודיות שלהן.
            </div>
            <div className={styles.description}>
            אני מזמינה אותך להצטרף אליי למסע של גילוי, צמיחה והעצמה. יחד, נבנה את הדרך לחיים מלאים, מספקים ומשמעותיים.
            </div>
            <div className={styles.description}>
                פיתחתי מגוון שירותים שיעזרו לך להתקדם בדרך שלך להצלחה
            </div>
            <div className={styles.arrowContainer}>
        <ChevronDown className={styles.bounceArrow} size={40} color="#472e1b" />
      </div>
{/* <Button text="צהיי, אני רוצה שנדבר"/> */}

    </>
}
export default SecondScreen