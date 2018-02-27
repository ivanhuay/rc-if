import React from 'react';
export default class ReIf extends React.Component {
  render () {
    if (this.props.if == true) {
      return <div>{this.props.children}</div>;
    }
    return null;
  }
};
