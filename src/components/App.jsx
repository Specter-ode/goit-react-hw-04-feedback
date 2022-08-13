import React, { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const handleIncrement = name => {
    setState(prevState => ({
      ...prevState,
      [name]: prevState[name] + 1,
    }));
  };
  const countTotalFeedback = () => {
    return Object.values(state).reduce((acum, feedback) => acum + feedback, 0);
  };
  const countPositiveFeedbackPercentage = () => {
    const totalFeedbacks = countTotalFeedback();
    const { good } = state;
    return Math.round((good / totalFeedbacks) * 100) || 0;
  };
  const { good, neutral, bad } = state;
  const total = countTotalFeedback();
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
          options={Object.keys(state)}
          onLeaveFeedback={handleIncrement}
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
            positiveFeedbackValue={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
};

export default App;
