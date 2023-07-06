import { CiFaceFrown, CiFaceMeh, CiFaceSmile } from 'react-icons/ci';
import { Button } from 'components/feedback/butons-style'

const FeedbackOptions = ({ fbTitle, onLeaveFeedback, option }) => {
    return (
        <div>
            <Button type="button" onClick={onLeaveFeedback}><CiFaceSmile />Good</Button>
            <Button type="button" onClick={onLeaveFeedback}><CiFaceMeh />Neutral</Button>
            <Button type="button" onClick={onLeaveFeedback}><CiFaceFrown />Bad</Button>
        </div>
    )
}

export default FeedbackOptions;