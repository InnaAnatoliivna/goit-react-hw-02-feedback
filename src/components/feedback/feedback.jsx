import TitleFeedback from 'components/title/titleFeedback';
import { CiFaceFrown, CiFaceMeh, CiFaceSmile } from 'react-icons/ci';

const Feedback = ({ fbTitle }) => {
    return (
        <>
            <TitleFeedback fbTitle={fbTitle} />
            <div>
                <button type="button"><CiFaceSmile />Good</button>
                <button type="button"><CiFaceMeh />Neutral</button>
                <button type="button"><CiFaceFrown />Bad</button>
            </div>
        </>
    )
}

export default Feedback;