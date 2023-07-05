import TitleFeedback from 'components/title/titleFeedback';

const Statistics = ({ fbTitle, good, neutral, bad }) => {
    return (
        <div>
            <TitleFeedback fbTitle={fbTitle} />
            <ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
            </ul>

        </div>
    )
}

export default Statistics;