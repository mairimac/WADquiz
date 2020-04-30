import React, { Component } from 'react';
import QuizDetails from './QuizDetails';
import App from './App'
import * as DataAPI from './utils/DataAPI'

class QuizList extends Component {

state ={
  quizzes: {},

}

componentDidMount() {
DataAPI.getAllQuizzes()
.then((quizzes) => {
console.log(quizzes)
  this.setState(() => ({
   quizzes
 }));

})
}


render(){
  const quizKeys = Object.keys(this.state.quizzes)
  const { quizzes } = this.state
    return (
    <div className="container">
      {quizKeys.map((quizKey) => {
        return (<QuizDetails
          key={quizKey}
          name={this.state.quizzes[quizKey].name}
          number={this.state.quizzes[quizKey].questions.length}
          quiz_id={this.state.quizzes[quizKey].id}
          />)
      })
}
 </div>
);
}
}
export default QuizList;
