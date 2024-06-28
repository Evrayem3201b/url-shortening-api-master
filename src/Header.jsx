import React, { useState } from 'react';
import detailImg from './assets/images/illustration-working.svg';
import bgLinkWindowImgDesk from './assets/images/bg-shorten-desktop.svg';
import bgLinkWindowImgMob from './assets/images/bg-shorten-mobile.svg';
import logo from './assets/images/logo.svg';
import menuImg from './assets/images/hamburger.svg';

function Header() {
    const [link, setLink] = useState('');
    const [linkShortened, setLinkShortened] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [menuOpened, setMenuOpened] = useState(false);

    const shortenApi = () => {
        const url = document.getElementById('link-area').value;

        if (url === '') {
            setErrorMessage('Please add a link');
            document.getElementById('link-area').classList.add('error');
        } else {
            setErrorMessage('');
            document.getElementById('link-area').classList.remove('error');

            const apiUrl = `https://is.gd/create.php?format=json&url=${encodeURIComponent(url)}`;

             fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    setLinkShortened(data.shorturl);
                    setLink(url);
                })
                .catch(error => console.error('Error:', error));
            document.getElementById("link-card").classList.add("show");
            document.getElementById("short-link-window").classList.add("active");
        }
    };

    const linkBtn = () => {
        navigator.clipboard.writeText(linkShortened);
        document.getElementById('copyBtn').textContent = 'Copied!';
        document.getElementById('copyBtn').style.backgroundColor = '#3a3053';
        
        localStorage.setItem('orgLink', document.getElementById('link').innerText);
        localStorage.setItem('shortLink', document.getElementById('link-shortened').innerText);
    };

    const navMenu = () => {
        setMenuOpened(!menuOpened);
    };

    return (
        <>
            <header>
                <nav className="desc-nav">
                    <div>
                        <img src={logo} alt="logo" className="logo-nav-h1" />
                        <label className="desc-nav-label">Features</label>
                        <label className="desc-nav-label">Pricing</label>
                        <label className="desc-nav-label">Resources</label>
                    </div>
                    <div className="nav-buttons">
                        <button className="desc-nav-label nav-button-login">Login</button>
                        <button className="nav-button">Sign Up</button>
                    </div>
                </nav>

                <nav className="mobile-nav">
                    <img src={logo} alt="logo" className="logo-nav-h1" />
                    <div id="mobile-menu" className={menuOpened ? 'opened' : ''}>
                        <div className="mob-nav-minor">
                            <label className="mob-nav-label">Features</label>
                            <label className="mob-nav-label">Pricing</label>
                            <label className="mob-nav-label">Resources</label>
                            <div className="hr"></div>
                            <label className="mob-nav-label">Login</label>
                            <button className="nav-button button-signup">Sign Up</button>
                        </div>
                    </div>
                    <img src={menuImg} onClick={navMenu} id="menu" />
                </nav>

                <div className="details">
                    <div className="details-header">
                        <h1 className="desc-nav-h1">More than just shorter links</h1>
                        <p className="details-header-p">Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                        <button className="get-started-button">Get Started</button>
                    </div>
                    <img src={detailImg} />
                </div>

                <div id='short-link-window' className="short-link-window">
                    <input type="text" id="link-area" placeholder="Shorten a link here..." />
                    <label id="labelError" className="labelError">{errorMessage}</label>
                    <button id="shortenBtn" onClick={shortenApi} className="shortenBtn">Shorten it!</button>
                </div>

                <div id="link-card" className="link-card">
                    <span id="link">{link}</span>
                    <hr color="#f0f0f0" width="100%" />
                    <span id="link-shortened">{linkShortened}</span>
                    <button onClick={linkBtn} id="copyBtn">Copy</button>
                </div>
            </header>
        </>
    );
}

export default Header;
