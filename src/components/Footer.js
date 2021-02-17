import React, { Component } from 'react'
import GitHubLogo from "../images/Footer Logos/github.svg"
import PortfolioLogo from "../images/Footer Logos/portfolio.png"

export class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__copyright">Designed &amp; Developed by Youssef Ahmed 2021</div>
                <ul className="footer__links">
                    <li className="footer__link">
                        <a href="#" target="_blank">
                            <span className="footer__link__text">Portfolio</span>
                            <img className="footer__link__logo" src={PortfolioLogo} alt="Portfolio Logo"/>
                        </a>
                    </li>
                    <li className="footer__link">
                        <a href="#" target="_blank">
                            <span className="footer__link__text">Code</span>
                            <img className="footer__link__logo" src={GitHubLogo} alt="GitHub Logo"/>
                        </a>
                    </li>
                </ul>
            </footer>
        )
    }
}

export default Footer
