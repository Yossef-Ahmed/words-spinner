import React, { Component } from 'react'
import "./style/App.scss"
import Header from "./components/Header";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    )
  }
}

export default App
