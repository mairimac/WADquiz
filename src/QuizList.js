import React, { Component } from 'react';
import QuizDetails from './QuizDetails';
import QuizDashboard from './App'

class QuizList extends Component {

  render () {

    const quizzes = this.props.quizzes.map((quiz) => (
      <QuizDetails
      name={quiz.name}
      number={quiz.number}/>
    ))
    return (
      <div>
        {quizzes}
      </div>
    );
  }
}

export default QuizList;
