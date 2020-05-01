import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import QuizList from './QuizList';
import QuestionScreen from './QuestionScreen';
import FeedbackScreen from './FeedbackScreen';



class App extends Component {


render(){
    return (
    <div className="container">
      <Route exact path='/' render={() =>(
        <QuizList/>
          )} />
      <Route exact path='/quiz' render={() =>(
        <QuestionScreen/>
              )} />
      <Route exact path='/feedback' render={() =>(
        <FeedbackScreen/>
                      )}/>
    </div>
  );
}
}


export default App;
