import React, { Component } from 'react';

import {connect} from 'react-redux';

import * as actions from '../actions/';

//Call this button component as CalButton to prevent confusion with actual button tag in jsx
class CalButton extends Component {

  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    //Just in case I want to change the button to arhor
    e.preventDefault;
    const {dispatch} = this.props;
    console.log('Got Clicked');
    dispatch(actions.addEntry(this.props.value));
  }

  render() {
    return (
      <button className={this.props.className} onClick={this.handleClick}>{this.props.value}</button>
    );
  }
}

export default connect()(CalButton);
