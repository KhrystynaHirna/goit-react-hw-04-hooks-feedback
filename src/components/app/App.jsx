import { useState, useEffect } from 'react';
import { Section } from '../section/Section';
import { FeedbackOptions } from '../feedback/FeedbackOptions';
import { Statistics } from '../statistics/Statistics';
import { Notification } from '../notification/Notification';
import s from './App.module.css';

export default function App() {
  const [good, setGoodOption] = useState(0);
  const [neutral, setNeutralOption] = useState(0);
  const [bad, setBadOption] = useState(0);
  const options = { good, neutral, bad };

  function totalFeedbackCount() {
    return good + neutral + bad;
  }
  function positivePercentageCount() {
    return Math.round((good / totalFeedbackCount()) * 100);
  }
  useEffect(() => {
    totalFeedbackCount();
    positivePercentageCount();
  });

  const onLeaveFeedback = name => {
    switch (name) {
      case 'good':
        setGoodOption(state => state + 1);
        return;
      case 'neutral':
        setNeutralOption(state => state + 1);
        return;
      case 'bad':
        setBadOption(state => state + 1);
        return;
      default:
        return;
    }
  };

  return (
    <div className={s.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {totalFeedbackCount() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedbackCount()}
            positivePercentage={positivePercentageCount()}
          />
        )}
      </Section>
    </div>
  );
}
