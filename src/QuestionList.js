import React, { Component } from 'react';
import Questions from './QuestionText';
import AnswerOptions from './AnswerOptions'

class QuestionList extends Component {

  render() {


const questionKeys= Object.keys(this.props.questions);

    const questions = this.props.questions[0].map((question) => (
      <Questions
      questionText={question.questionText[0]}
      />

    ))
      return (
  <div className='container'>

      {questions[0]}
    )
  })}
        <div>

        </div>
        <div>
        <AnswerOptions/>
        </div>
        </div>


    );
  }
}

export default QuestionList;
