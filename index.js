import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import 'react-bootstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>

        <center>
          <div className="container-fluid">

            <div className="row">
              <button className="button"> Send </button>
              <button className="button"> Recieve </button>
            </div>
            <div className="row">
              <div className="col-sm-4">
              </div>
            </div>
            <div >
            </div>
          </div>
        </center>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
