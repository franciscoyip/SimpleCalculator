import React, {Component} from 'react';

import {connect} from 'react-redux';

class EntryBox extends Component {

  render() {
    return (
      <div className="entry-wrapper">
        <div className="entry text-right">
          {this.props.expression}
        </div>
      </div>
    );
  }
};

function mapStateToProps(state){
  return {"expression": state.entry.expression};
}

export default connect(mapStateToProps)(EntryBox);
