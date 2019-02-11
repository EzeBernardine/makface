import React, { Component } from 'react';
// import Landing from './component/Landing';
import SignUp from './component/SignUp'
import './App.css';
// import IconHeader from './component/IconHeader'


class App extends Component {
  render() {
    return (
      <div className="App">
        <SignUp/>
        {/* <Landing /> */}
        {/* <IconHeader /> */}
      </div>
    );
  }
}

export default App;
