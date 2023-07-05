import { CiFaceFrown, CiFaceMeh, CiFaceSmile } from 'react-icons/ci';

const FeedbackOptions = ({ fbTitle, onLeaveFeedback, option }) => {
    return (
        <div>
            <button type="button" onClick={onLeaveFeedback}><CiFaceSmile />Good</button>
            <button type="button" onClick={onLeaveFeedback}><CiFaceMeh />Neutral</button>
            <button type="button" onClick={onLeaveFeedback}><CiFaceFrown />Bad</button>
        </div>
    )
}

export default FeedbackOptions;