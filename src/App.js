import React, { Component } from 'react';
// import Landing from './component/Landing';
import SignIn from './component/SignIn'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <SignIn />
        {/* <Landing /> */}
      </div>
    );
  }
}

export default App;
