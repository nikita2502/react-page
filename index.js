import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import 'react-bootstrap';
import { table } from 'react-bootstrap';

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
          <table className="table">
            <div className="container-fluid">
              <tr>
                <div className="row">
                  <td>
                    <button className="button"> Send </button>
                  </td>
                  <td>
                    <button className="button"> Recieve </button>
                  </td>
                </div>
              </tr>
              <div className="row">
                <div className="col-sm-4">
                </div>
              </div>
              <div >
              </div>
            </div>
          </table>
        </center>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
