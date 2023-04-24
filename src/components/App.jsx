import React, { Component } from 'react';
import { FormContact } from './FormContact/FormContact';

export class App extends Component {
  state = {};

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <FormContact onSubmit={this.formSubmitHandler} />
      </div>
    );
  }
}
