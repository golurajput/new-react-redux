import React, { Component } from 'react';
// import { Header } from 'semantic-ui-react';
import SideBars from './Sidebars';
import Headers from './Headers';
import '../stylesheet/style.css';
export default class MainFrame extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="header-div">
          <Headers/>
        </div>
        <div className="side-bar-div">
          <SideBars/>
        </div>
        <div className="main-content">
          {this.props.children}
        </div>
      </React.Fragment>
    )
  }
}
