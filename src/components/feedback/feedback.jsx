import { CiFaceFrown, CiFaceMeh, CiFaceSmile } from 'react-icons/ci';
import css from 'components/feedback/feedback.module.css'

const FeedbackOptions = ({ fbTitle, onLeaveFeedback, option }) => {
    return (
        <div className={css.wrapper}>
            <button className={css.btn} type="button" onClick={onLeaveFeedback}><CiFaceSmile className={css.icon} /><span>Good</span></button>
            <button className={css.btn} type="button" onClick={onLeaveFeedback}><CiFaceMeh className={css.icon} /><span>Neutral</span></button>
            <button className={css.btn} type="button" onClick={onLeaveFeedback}><CiFaceFrown className={css.icon} /><span>Bad</span></button>
        </div>
    )
}

export default FeedbackOptions;