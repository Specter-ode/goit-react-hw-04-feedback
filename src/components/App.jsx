import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleIncrement = e => {
    const name = e.currentTarget.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (acum, feedback) => acum + feedback,
      0
    );
  };
  countPositiveFeedbackPercentage = () => {
    const totalFeedbacks = this.countTotalFeedback();
    const { good } = this.state;
    return Math.round((good / totalFeedbacks) * 100) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <div
        style={{
          marginTop: 50,
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              goodValue={good}
              neutralValue={neutral}
              badValue={bad}
              totalValue={total}
              positiveFeedbackValue={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
