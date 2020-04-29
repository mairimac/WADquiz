import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class AnswerOptions extends Component {
  render () {
    return (
      <div className="card mb-1 p-2">
          <div className ="text-left card-header">Choose the correct answer.</div>

          <div className = "card-body">

      <div className="btn btn-outline-dark btn-block p-2 mb-2">Answer option 1</div>
      <div className="btn btn-outline-dark btn-block p-2 mb-2">Answer option 2</div>
      <div className="btn btn-outline-dark btn-block p-2 mb-2">Answer option 3</div>
      <div className="btn btn-outline-dark btn-block p-2 mb-2">Answer option 4</div>




        <div className="btn btn-info btn-block p-2" data-toggle="modal" data-target="#hint">Hint</div>
               <Link to ="/feedback" className="btn btn-primary btn-block p-2">Next question <svg class="bi bi-chevron-double-right" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L9.293 8 3.646 2.354a.5.5 0 010-.708z" clip-rule="evenodd"/>
                  <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L13.293 8 7.646 2.354a.5.5 0 010-.708z" clip-rule="evenodd"/>
                </svg></Link>


                </div>
      </div>

    )
  }
}

export default AnswerOptions;
