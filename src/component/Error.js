import React from 'react';
import './error.css';

class Error extends React.Component {
  constructor(props) {
    super(props);
    this.errorMSg = props.msg;
  }

  render() {
    return <div className="pexel--error">{this.errorMSg}</div>;
  }
}

export default Error;
