import React from 'react';
export class RcElse extends React.Component {
  render() {
    return this.props.children;
  }
};
export default class RcIf extends React.Component {
  constructor(props) {
    super(props);
    this.getRcElse = this.getRcElse.bind(this);
    this.getChilds = this.getChilds.bind(this);
  }
  getRcElse() {
    let rcElse = Array.isArray(this.props.children) &&
      this.props.children.filter((elm) => {
        return elm.type === RcElse;
      })[0] || null;
    return rcElse;
  }
  getChilds() {
    let elms = this.props.children.filter((elm) => {
      return elm.type !== RcElse;
    });
    if (elms.length === 1) {
      elms = elms[0];
    }
    return elms;
  }
  render() {
    if (this.props.if == true) {
      if (Array.isArray(this.props.children)) {
        return this.getChilds();
      }
      return this.props.children;
    }
    if (!this.props.if) {
      return this.getRcElse();
    }
    return null;
  }
};
