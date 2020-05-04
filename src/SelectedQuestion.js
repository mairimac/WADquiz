import React, { Component } from 'react';
import QuestionList from './QuestionList';
import Questions from './QuestionText';
import AnswerOptions from './AnswerOptions'
import * as DataAPI from './utils/DataAPI'

class SelectedQuestion extends Component {


  render(){
    const firstQuestionShown = this.state.quizzes)
    const { questions } = this.state
      return (
      <div className="container">

        {questionKeys.map((questionKey) => {
          return (
            <div>
              <Questions
                key={questionKey}

                questionText={this.state.questions[questionKey].questionText}
                />
              <AnswerOptions
                key={this.state.questions[questionKey].id}
                questionKey={questionKey}
                answers={this.state.questions[questionKey].answers}
                questions={questions}
                />

            </div>

        )
  })}

  </div>

  );

  }
}


export default SelectedQuestion;
