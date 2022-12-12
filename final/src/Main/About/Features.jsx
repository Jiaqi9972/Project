import './Features.css';

function Features() {
    return (
        <div className="about__features">
            <ul className="features-cards">
                <li className="features-card">
                    <i className="fa-solid fa-face-smile features-cardicon"></i>
                    <p className="features-cardtitle">Elite Homes</p>
                    <p className="features-cardcomment">Best vacation with best homes!</p>
                </li>
                <li className="features-card">
                    <i className="fa-solid fa-circle-check features-cardicon"></i>
                    <p className="features-cardtitle">Easy to use</p>
                    <p className="features-cardcomment">Even cute cats can use well!</p>
                </li>
                <li className="features-card">
                    <i className="fa-solid fa-heart features-cardicon"></i>
                    <p className="features-cardtitle">Best services</p>
                    <p className="features-cardcomment">The most reassuring service that cats love!</p>
                </li>
            </ul>
        </div>
    );
}

export default Features;