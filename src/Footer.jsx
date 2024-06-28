
import facebook from './assets/images/icon-facebook.svg'
import twitter from './assets/images/icon-twitter.svg'
import pinterest from './assets/images/icon-pinterest.svg'
import instgram from './assets/images/icon-instagram.svg'

import logo from './assets/images/logo-footer.svg'

function Footer(){
    return <>
        <footer>
            <div className="footer-head">
                <div className="footer-head-text">
                    <h1 className="footer-head-h1">Boost your links today</h1>
                    <button className="footer-head-btn">Get Started</button>
                </div>
            </div>
            <div className="footer-foot">
                <img src={logo} alt="" className="shortly-cont" />
                <div className="info-cont">
                    <div className="info-cards">
                        <h1 className="info-card-h1 h1">Features</h1>

                        <h1 className="info-card-h1">Link Shortening</h1>
                        <h1 className="info-card-h1">Branded Links</h1>
                        <h1 className="info-card-h1">Analytics</h1>
                    </div>
                    <div className="info-cards">
                        <h1 className="info-card-h1 h1">Resources</h1>

                        <h1 className="info-card-h1">Blog</h1>
                        <h1 className="info-card-h1">Developers</h1>
                        <h1 className="info-card-h1">Support</h1>
                    </div>
                    <div className="info-cards">
                        <h1 className="info-card-h1 h1">Company</h1>

                        <h1 className="info-card-h1">About</h1>
                        <h1 className="info-card-h1">Our Team</h1>
                        <h1 className="info-card-h1">Careers</h1>
                        <h1 className="info-card-h1">Contact</h1>
                    </div>
                    <div className="info-img-scoial">
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={pinterest} alt="" />
                        <img src={instgram} alt="" />
                    </div>
                </div>
            </div>
        </footer>
    </>
}

export default Footer