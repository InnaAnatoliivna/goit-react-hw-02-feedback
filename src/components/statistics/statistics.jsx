const Statistics = ({ fbTitle, good, neutral, bad, total = 0, positivOption = 0 }) => {
    return (
        <div>
            <ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total}</li>
                <li>Positiv feedback: {positivOption} %</li>

            </ul>

        </div>
    )
}

export default Statistics;