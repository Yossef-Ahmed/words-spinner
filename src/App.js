import React, { Component } from 'react'
import "./style/App.scss"
import Header from "./components/Header";
import Footer from "./components/Footer";
import WordsSpinner from "./components/WordsSpinner";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <WordsSpinner />
        <Footer />
      </div>
    )
  }
}

export default App
