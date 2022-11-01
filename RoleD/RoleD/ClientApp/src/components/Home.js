import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>Привет, Путник!</h1>
            <p>Совсем скоро здесь появится что-то очень интересное</p>
      </div>
    );
  }
}
