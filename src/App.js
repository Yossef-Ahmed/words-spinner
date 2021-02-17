import React, { Component } from 'react'
import "./style/App.scss"
import Header from "./components/Header";
import Footer from "./components/Footer";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    )
  }
}

export default App
