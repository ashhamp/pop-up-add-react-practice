import React, { Component } from 'react';
import CloseButton from './CloseButton'
import EmailForm from './EmailForm'

class AdBox extends Component {
  render() {
    return (
      <div className="main-div">
        <CloseButton />
        <h2 className="title-font">You have won tickets to see Taylor Swift!!</h2>
        <p> Please enter your email so we can send you the tickets </p>
        <EmailForm />
      </div>
    );
  }
}

export default AdBox;
