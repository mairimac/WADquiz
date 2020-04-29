import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class QuizDetails extends Component {


  render () {
    return (

      <div className="card border-dark mb-2">
          <h5 className ="text-center card-header card text-white bg-primary">{this.props.name}</h5>
              <div className ="card-body text-center">
                  <p className ="card-text">Number of questions:<br/>{this.props.number}</p>
                      <Link
                      to='/quiz'
                      className="btn btn-primary mb-3">Start</Link>
              </div>
        </div>
    );
  }
}

export default QuizDetails;
