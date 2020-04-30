import React, { Component } from 'react';
import QuestionList from './QuestionList';
import Questions from './QuestionText';
import AnswerOptions from './AnswerOptions'
import * as DataAPI from './utils/DataAPI'

class QuestionScreen extends Component {
  state ={
  questions: {},

  }

  componentDidMount() {
  DataAPI.getAllQuestions()
  .then((questions) => {
  console.log(questions)
    this.setState(() => ({
     questions
   }));

  })
  }

  render(){
    const questionKeys = Object.keys(this.state.questions)
    const { questions } = this.state
      return (
      <div className="container">

        {questionKeys.map((questionKey) => {
          return (<Questions
            key={questionKey}
            questionText={this.state.questions[questionKey].questionText}
            />
        )
  })}

  </div>

  );

  }
}


export default QuestionScreen;
