import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__main">
                <div className="footer__text">
                    <h4 className="footer__text-title">Branding stuff</h4>
                    <p className="footer__text-pharahraph">If you want to make the search for a new table easier,
                        come to us!
                    </p>
                </div>
                <div className="footer__logo">
                    <svg width="70" height="70" viewBox="0 0 122 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M61 61.5416H15.25V107.292H61V61.5416Z" fill="#82BBB5" />
                        <path d="M106.75 15.7916H61V61.5416H106.75V15.7916Z" fill="#7A7A7A" />
                    </svg>
                </div>
                <div className="footer__logos">
                    <a href="#"><img className="footer__logos1" src="./images/facebook.svg"></img></a>
                    <a href="#"><img className="footer__logos1" src="./images/twitter.svg"></img></a>
                    <a href="#"><img className="footer__logos1" src="./images/google.svg"></img></a>
                    <a href="#"><img className="footer__logos1" src="./images/linkedin.svg"></img></a>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__bottom-line"></div>
                <p className="footer__bottom-copyrights">2023 IoT © Copyright all rights reserved, bla bla</p>
            </div>
        </footer>
    );
}

export default Footer