import React from 'react';
export class RcElse extends React.Component {
  render () {
    return <div>{this.props.children}</div>;
  }
};
export default class RcIf extends React.Component {
  constructor(props){
    super(props);
    const rcElse = Array.isArray(props.children) &&
     props.children.filter((elm)=>{
       return elm.type === RcElse;
     })[0] || null;
    this.state = {
      rcElse
    };
  }
  componentWillReceiveProps(nextProps) {
    const rcElse = Array.isArray(nextProps.children) &&
     nextProps.children.filter((elm)=>{
       return elm.type === RcElse;
     })[0] || null;
    this.setState({
      rcElse
    });
  }
  render () {
    if (this.props.if == true) {
      if (Array.isArray(this.props.children)){
        return (<div>
          {this.props.children.filter((elm)=>{
            return elm.type !== RcElse;
          })}
        </div>);
      }
      return <div>{this.props.children}</div>;
    }
    if (this.state.rcElse && !this.props.if){
      return <div>{this.state.rcElse}</div>;
    }
    return null;
  }
};
