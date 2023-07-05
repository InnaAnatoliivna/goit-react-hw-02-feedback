import { Component } from 'react';
import Head from 'components/title/head'
import Feedback from 'components/feedback/feedback'
import Statistics from 'components/statistics/statistics'


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  render() {

    const { good, neutral, bad } = this.state;
    // console.log(this.state)

    return (
      <div>
        <Head
          pageTitle='Cafe Expresso'
        />

        <Feedback
          fbTitle='Please leave feedback'
        />

        <Statistics
          fbTitle='Statistics'
          good={good}
          neutral={neutral}
          bad={bad}
        />
      </div>
    );
  }
};

// react homework