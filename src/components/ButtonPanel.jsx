import React, { Component } from 'react';

import {connect} from 'react-redux';

import CalButton from './CalButton';

class ButtonPanel extends Component {

  renderButtons() {
    //Quick and Dirty config array
    const buttonConfig = [
      {
        "className":"control del",
        "value":"delete"
      },
      {
        'className':'number',
        "value":7
      },
      {
        'className':'number',
        "value":8
      },
      {
        'className':'number',
        "value":9
      },
      {
        'className':'control',
        "value":'/'
      },
      {
        'className':'number',
        "value":4
      },
      {
        'className':'number',
        "value":5
      },
      {
        'className':'number',
        "value":6
      },
      {
        'className':'control',
        "value":'x'
      },
      {
        'className':'number',
        "value":1
      },
      {
        'className':'number',
        "value":2
      },
      {
        'className':'number',
        "value":3
      },
      {
        'className':'control',
        "value":'-'
      },
      {
        'className':'number',
        "value":"."
      },
      {
        'className':'number',
        "value":0
      },
      {
        'className':'number',
        "value":"="
      },
      {
        'className':'control',
        "value":'+'
      },
    ];

    return buttonConfig.map((config, index)=>{
      return (<CalButton {...config} key={index}/>);
    });
  }

  render() {

    return (
      <div className="button-wrapper">
        <div className="spacing control"></div>
        {this.renderButtons()}
      </div>
    );
  }

}

export default ButtonPanel;
