import { Component } from 'react';
import { FeedBackOptions } from "./FeedBackOptions/FeedBackOptions";
import {Statistics} from "./Statistics/Statistics";
import {Notification} from "./Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
 onLeaveFeedback = ({ target }) => {
   const btnName = target.name;
    this.setState(prevState => ({
      [btnName]: prevState[btnName] + 1,
    }));
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0)
      return 0;
    else {return Math.round(this.state.good/this.countTotalFeedback()*100) }
   }

  render() {
    const btns = Object.keys(this.state);
    
    return ( 

    <div
      style={{
        margin: '0px auto' ,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
        boxShadow: '0 0 10px #b4b3b3',
        backgroundColor: 'rgb(230, 231, 234)',
        width: '360px',
      }}
    >
    < FeedBackOptions
            title={'Please leave feedback'}
            btns={btns}
          clickFeedback={this.onLeaveFeedback} />
        {this.countTotalFeedback() !== 0 ? (
        < Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />) : (
            <Notification
              message={"There is no feedback"} />
          )}
      </div>
        )
     }};
