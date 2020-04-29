import React, { Component } from 'react';
import * as DataAPI from './utils/DataAPI';

class App extends Component {
  state ={
  questions: []
}

componentDidMount() {
  DataAPI.getAllQuestions()
  .then((questions) => {
    console.log("questions", questions)
    this.setState(() => ({
     questions
    }))
  })
}

render() {
    const questionKeys = Object.keys(this.state.questions);
    const { questions } = this.state
    return (
    <div className="container">
      {questionKeys.map((questionKey) => {
        return (<p key={questionKey}>{this.state.questions[questionKey].questionText}</p>)
      })}
    </div>
    );
  }

}export default App;
