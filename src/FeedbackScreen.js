import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class FeedbackScreen extends Component {
  render () {
    return (
      <div className="container">

        <div className="row ">
          <div className="col">
            <h3 className="text-center display-4">End of Quiz</h3>
          </div>
        </div>


        <div className="row p-1">
          <div className="col-sm-6 col-md-4">

              <div className="alert alert-success" role="alert">
                Question 1 <span className="badge badge-success badge-pill float-right">Correct</span>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className="alert alert-danger" role="alert">
                Question 2 <span className="badge badge-danger badge-pill float-right">Incorrect</span>
              </div>
            </div>


            <div className="col-sm-6 col-md-4">
               <div className="alert alert-success" role="alert">
                Question 3 <span className= "badge badge-success badge-pill float-right">Correct</span>
              </div>
            </div>


          <div className="col-sm-6 col-md-4">

              <div className="alert alert-primary" role="alert">
                Question 4 <span className="badge badge-primary badge-pill float-right">Not
                attempted</span>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className="alert alert-success" role="alert">
                Question 5 <span className=
                "badge badge-success badge-pill float-right">Correct</span>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className="alert alert-success" role="alert">
                Question 6 <span className=
                "badge badge-success badge-pill float-right">Correct</span>
              </div>
            </div>


        </div>


        <div className="row">
          <div className="col">

            <div className="card text-dark">
              <div className="card-body text-center">
                <h4 className="card-title">Well done for completing the quiz.</h4>
                <h5>You got 4/6 correct.</h5>

                <Link to ="/quiz" className="btn btn-primary mt-2 mb-3">Try Again?</Link><br/>
                <Link to ="/" className="btn btn-primary mb-3">Quizzes home</Link>

              </div>
            </div>
          </div>
        </div>

    </div>

    )
  }
}

export default FeedbackScreen;
