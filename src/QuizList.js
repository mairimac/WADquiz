import React, { Component } from 'react';
import QuizDetails from './QuizDetails';
import QuestionList from './QuestionList';
import App from './App'
import * as DataAPI from './utils/DataAPI'

class QuizList extends Component {

state ={
  quizzes: {},

}

componentDidMount() {
DataAPI.getAllQuizzes()
.then((quizzes) => {

  this.setState(() => ({
   quizzes
 }));

})
}


render(){
  const quizKeys = Object.keys(this.state.quizzes)
  console.log(quizKeys)

  const { quizzes } = this.state
    return (
    <div className="container">
      {quizKeys.map((quizKey) => {
        return (

          <div>
          <QuizDetails
          key={quizKey}
          name={this.state.quizzes[quizKey].name}
          number={this.state.quizzes[quizKey].questions.length}
          quiz_id={this.state.quizzes[quizKey].id}
          questions={this.state.quizzes[quizKey].questions}

          />
          <QuestionList
          questions={this.state.quizzes[quizKey].questions}
          quiz_id={this.state.quizzes[quizKey].id}
          />
          </div>


        )
      })
}
 </div>
);
}
}
export default QuizList;
