import { Component } from 'react';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';

class App extends Component {

   static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };
  
  onLeaveFeedbackClick = option => {
      this.setState(prevState => {
        return {
          [option]: prevState[option] + 1,
        };
      });
  };
  
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  
  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  }

  render() {
    const options = Object.keys(this.state);
    return (
      <div>
        <Section title={"Please leave feedback"}>
        <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedbackClick} />
        </Section>
        {this.countTotalFeedback() === 0 ? <Notification message={"There is no feedback"}/> : 
        <Section title={"Statistics"}>
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
        </Section>
}
      </div>
      );
  }
}

export default App;
