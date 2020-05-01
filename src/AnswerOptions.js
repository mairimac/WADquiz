import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class AnswerOptions extends Component {


  render () {
    const questionKey= this.props.questionKey
    const answerKeys = Object.keys(this.props.answers)
    const { answers } = this.props
    return (
<div className="container">
      {answerKeys.map((answerKey) => {
        return (<div className="btn btn-outline-dark btn-block p-2 mb-2">{this.props.questions[questionKey].answers[answerKey].answerText}</div>)
  })}
  </div>
);


}
}


export default AnswerOptions;
