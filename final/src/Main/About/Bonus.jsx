import './Bonus.css'

function Bonus() {
    return (
        <ul className="about__bonus">
            <li className="bonus-message"><i class="fa-sharp fa-solid fa-location-dot bonus-messageicon"></i>Try the home first, and pay for it later.</li>
            <li className="bonus-message"><i class="fa-sharp fa-solid fa-fish bonus-messageicon"></i>Refer you cat friend and you'll both get yummy cans and $50 off.</li>
            <li className="bonus-message"><i class="fa-sharp fa-solid fa-sack-dollar bonus-messageicon"></i>Not feline it? Contact us about our generous refund policy.</li>
            <li className="bonus-message"><i class="fa-sharp fa-solid fa-heart-crack bonus-messageicon"></i>Cat got your tongue? Don't hesitate to reach out and let us know how we can improve your experience.</li>
        </ul>
    );
}

export default Bonus;