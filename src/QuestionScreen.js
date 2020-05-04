import React, { Component } from 'react';
import QuestionList from './QuestionList';
import Questions from './QuestionText';
import AnswerOptions from './AnswerOptions'
import * as DataAPI from './utils/DataAPI'

class QuestionScreen extends Component {
  state ={
    questions: {},
    quizzes: {},
    quizId: ''
  }


  componentDidMount() {
    const { quiz_id } = this.props.match.params;
    this.setState({ quizId: quiz_id })

    DataAPI.getAllQuestions()
    .then((questions) => {
      console.log(questions)
      this.setState(() => ({
       questions
     }));    })

    DataAPI.getAllQuizzes()
    .then((quizzes) => {
    console.log(quizzes)
      this.setState(() => ({
       quizzes
     }));
    })
  }

  render()
  {
    const questionKeys = Object.keys(this.state.questions)
    const { questions, quizzes, quizId } = this.state
    console.log( 'questions:', questions, 'quizzes:', quizzes, 'quizId:',quizId)
    const currentQuizQuestions = quizzes[quizId] && quizzes[quizId].questions;
    console.log("currentQuizQuestions", currentQuizQuestions)

    return (

      <div className="container">
      {currentQuizQuestions && currentQuizQuestions.map((questionKey) => {
          console.log("questionKey", questionKey)
          return (
            <div>
              <Questions
                key={questionKey}
                questionText={questions[questionKey].questionText}

              />
              <AnswerOptions
                key={questions[questionKey].id}
                questionKey={questionKey}
                answers={this.state.questions[questionKey].answers}
                questions={questions}
              />
            </div>        )
  })}
   </div>
 );
}
}

export default QuestionScreen;
