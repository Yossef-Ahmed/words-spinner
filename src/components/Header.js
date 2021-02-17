import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header__icon">🌀</div>
                <div className="header__text">
                    <h1 className="header__title">The Words Spinner</h1>
                    <p className="header__description">It reverse any word that has 5 or more letters</p>
                </div>
            </header>
        )
    }
}

export default Header
