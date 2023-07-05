import { Component } from 'react';
import Head from 'components/title/head';
import FeedbackOptions from 'components/feedback/feedback';
import Statistics from 'components/statistics/statistics';
import Section from 'components/title/titleFeedback';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onBtnOptions = (evt) => {
    if (evt.target.textContent === 'Good') {
      this.setState(({ good }) => ({ good: good + 1 }))
    } else if (evt.target.textContent === 'Neutral') {
      this.setState(({ neutral }) => ({ neutral: neutral + 1 }))
    } else if (evt.target.textContent === 'Bad') {
      this.setState(({ bad }) => ({ bad: bad + 1 }))
    }
  };

  countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = (total) => {
    const { good } = this.state;
    if (total !== 0) {
      return Math.round((good / total) * 100)
    }
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(this.state);
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage(total)

    return (
      <div>
        <Head
          pageTitle='Cafe Expresso'
        />

        <Section fbTitle='Please leave feedback'>
          <FeedbackOptions
            onLeaveFeedback={this.onBtnOptions}
          />
        </Section>

        <Section fbTitle='Statistics'>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivOption={positiveFeedbackPercentage}
          />
        </Section>

      </div>
    );
  }
}