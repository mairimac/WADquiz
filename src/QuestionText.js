import React, { Component } from 'react';





class Questions extends Component {
  render () {

    return (
      <div className="container">
       <div className="row">
          <div className="col-sm">
              <div className="card mb-2">
                  <div className ="text-left card-header">1. Read the question.</div>
                   <div className="card-body text-justify"> {this.props.questionText}
                   </div>
                      <div className="text-center">
                          <img className="mb-4 rounded img-fluid" max-width="100%"  height="auto" src="http://i-want-to-study-engineering.org/figs/circle_intersection.png"/>
                      </div>
                    </div>
          </div>
      </div>
</div>
    );
  }
}

export default Questions;
