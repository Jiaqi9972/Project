import './Introduction.css';

function Introduction() {
    return (
        <div className="about__introduction">
            
            <img className="introduction-img01" src="imgs/cozy cat.jpg" alt="cozy cat" />
            <ul className="introduction-list01">
                We provide
                <li className="introduction-list01message">A wide range of house options</li>
                <li className="introduction-list01message">Secure and reliable payment system</li>
                <li className="introduction-list01message">Professional customer service team</li>
            </ul>
            <ul className="introduction-list02">
                Advantages
                <li className="introduction-list02message">Easy and convenient search function</li>
                <li className="introduction-list02message">Verified listings and hosts</li>
                <li className="introduction-list02message">Flexible booking and cancellation policies</li>
            </ul>
            <img className="introduction-img02" src="imgs/warm cat.jpg" alt="warm cat" />
        </div>
    );
}

export default Introduction;