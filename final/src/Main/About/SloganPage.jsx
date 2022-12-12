import './SloganPage.css';

function SloganPage() {
    return (
        <div className="about__sloganpage">
            <div className="sloganpage-slogan">
                Provide cats a purrrfect place to enjoy a vacation.
            </div>
            <div className="sloganpage-download">
                <div>
                    <a className="slogonpage-downloadbutton" href="https://www.apple.com/app-store/">
                        <i className="fa-brands fa-apple slogonpage-downloadicon"></i>
                        <p className="slogonpage-downloadinfo">Download</p>
                    </a>
                </div>
                <div>
                    <a className="slogonpage-downloadbutton" href="https://play.google.com/store/apps?hl=en_US&gl=US">
                        <i className="fa-brands fa-google-play slogonpage-downloadicon"></i>
                        <p className="slogonpage-downloadinfo">Download</p>
                    </a>
                </div>
            </div>
            <img src="imgs/catgng theme.png" className="sloganpage-themeimg" alt="Catgng theme" />
        </div>
    );
}

export default SloganPage;