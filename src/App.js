import React, { Component } from 'react';
import QuizList from './QuizList';
import QuestionList from './QuestionList';
import FeedbackScreen from './FeedbackScreen'

import { Route } from 'react-router-dom'


class QuizDashboard extends Component {
  state = {
    quizzes: [
      {
        name:'Think you know React?',
        number:6
    },
    {
      name: "OpenCV is awesome",
      number:4
    }
    ],

    questions: [

  {

     id: "question_1",
     quiz: "quiz_1",
     questionText: "What would be the output from this code snippet",
     answers: [
        { "id": 0, "answerText" : "Hello Russell", "correct": true },
        { "id": 1, "answerText" : "Russell", "correct": false },
        { "id": 2, "answerText" : "Hello, world!", "correct": false },
        { "id": 3, "answerText" : "Russell Hello", "correct": false }
     ],
     image: "q1.png",
     hint: "React components implement a render() method that takes input data and returns what to display.  Input data that is passed into the component can be accessed by render() via this.props.",
     hintViewed: false,
     questionAttempted: false
  },
   {
     id: "question_2",
     quiz: "quiz_1",
     questionText: "What does this code do?",
     answers: [
        { "id": 0, "answerText" : "Finds the time and prints it out.", "correct": false },
        { "id": 1, "answerText" : "Prints out an incrementing timer (per second).", "correct": true },
        { "id": 2, "answerText" : "Creates a countdown (per second).", "correct": false }
     ],
     image: "somePathOrURLToFile.jpg",
     hint: "1000 milliseconds is one second.",
     hintViewed: false,
     questionAttempted: false
  },
   {
     id: "question_3",
     quiz: "quiz_1",
     questionText: "Some question text ...",
     answers: [
        { "id": 0, "answerText" : "Some Answer Text ... ", "correct": false },
        { "id": 1, "answerText" : "Some Answer Text ... ", "correct": true },
        { "id": 2, "answerText" : "Some Answer Text ... ", "correct": false },
        { "id": 3, "answerText" : "Some Answer Text ... ", "correct": false }
     ],
     image: "somePathOrURLToFile.jpg",
     hint: "Some hint text ...",
     hintViewed: false,
     questionAttempted: false
  }

]

}

render() {
  

    return (
    <div>

        <Route exact path='/' render={() => (
          <QuizList
          quizzes={this.state.quizzes}
          />
        )} />
          <Route path='/quiz' render={() => (
          <QuestionList
          questions={this.state.questions}


          />
        )} />
          <Route path='/feedback' component={FeedbackScreen} />

          </div>

    );
  }

}

export default QuizDashboard;
