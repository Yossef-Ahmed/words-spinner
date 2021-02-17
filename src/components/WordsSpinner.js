import React, { Component } from 'react'

export class WordsSpinner extends Component {
    state = {
        resultWords: ''
    }
    changeResultWords = e => {
        this.setState({resultWords: this.spinWords(e.target.value)})
    }
    spinWords = (string) => {
        return string
            .split(" ")
            .map(word => word.length >= 5 ? word.split("").reverse().join("") : word)
            .join(" ")
    }
    render() {
        return (
            <section className="words-spinner">
                <form>
                    <textarea className="words-spinner__textarea" onChange={this.changeResultWords} name="words" cols="30" rows="10"></textarea>
                </form>
                <div className="words-spinner__results">{this.state.resultWords}</div>
            </section>
        )
    }
}

export default WordsSpinner
