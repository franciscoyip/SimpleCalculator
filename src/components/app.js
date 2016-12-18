import React, { Component } from 'react';

import EntryBox from './EntryBox';

import ButtonPanel from './ButtonPanel';

export default class App extends Component {

  render() {

    return (
      <div>
        <div>React simple calculator</div>
        <div className="app-calculator">
          <EntryBox />
          <ButtonPanel />
        </div>
      </div>
    );
  }
}
