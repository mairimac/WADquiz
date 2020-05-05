import React, { Component } from 'react';


class Questions extends Component {
  render () {



    return (
      <div className="container">
       <div className="row">
          <div className="col-sm">
              <div className="card mb-2">
                  <div className ="text-left card-header">Read the question.</div>
                   <div className="card-body text-justify"> {this.props.questions[this.props.currentKey].questionText}

                   </div>
                      <div className="text-center">
                          <img className="mb-4 rounded img-fluid" max-width="100%"  height="auto" src='{this.props.image}'/>
                      </div>
                    </div>
          </div>
      </div>
</div>
    );
  }
}

export default Questions;
