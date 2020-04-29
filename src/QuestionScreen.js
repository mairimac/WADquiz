import React, { Component } from 'react';
import QuestionList from './QuestionList';
import Questions from './QuestionText';
import AnswerOptions from './AnswerOptions'

class QuestionScreen extends Component {

  render () {


    return (
      <div class='container'>
      <Questions />
      <AnswerOptions />

    </div>

    );
  }
}

export default QuestionScreen;
