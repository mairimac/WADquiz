import React, { Component } from 'react';
import Questions from './QuestionText';
import AnswerOptions from './AnswerOptions'

class QuestionList extends Component {

  render () {

    return(

<div>questions: {this.props.questions}<br/>
selected quiz = {this.props.quiz_id}
</div>
)
}
}

export default QuestionList;
