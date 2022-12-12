import './List.css';
function List() {
    return (
        <div className='footer__linkstitle'>
            <div className="footer__links">
                <ul className="links-information">
                    Resources
                    <li className="links-license"><a href="https://fontawesome.com/license">Font Awesome</a></li>
                    <li className="links-license"><a href="https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL">Google Font</a></li>
                    <li className="links-license"><a href="https://www.rawpixel.com/services/licenses">Rawpixel</a></li>
                    <li className="links-license"><a href="https://unsplash.com/license">Unsplash</a></li>
                    <li className="links-license"><a href="https://www.pexels.com/license/">Pexels</a></li>
                </ul>
                <ul className="links-citytitle">
                    Explore more
                    <li className="links-city"><a href="https://www.google.com.hk/search?q=Paris">Paris</a></li>
                    <li className="links-city"><a href="https://www.google.com.hk/search?q=London">London</a></li>
                    <li className="links-city"><a href="https://www.google.com.hk/search?q=Rome">Rome</a></li>
                    <li className="links-city"><a href="https://www.google.com.hk/search?q=Barcelona">Barcelona</a></li>
                    <li className="links-city"><a href="https://www.google.com.hk/search?q=Shanghai">Shanghai</a></li>
                    <li className="links-city"><a href="https://www.google.com.hk/search?q=Tokyo">......</a></li>
                </ul>
                <ul className="links-friendtitle">
                    Friend websites
                    <li className="links-friendwebsite"><a href="https://www.airbnb.com">Airbnb</a></li>
                    <li className="links-friendwebsite"><a href="https://www.booking.com/">Booking</a></li>
                    <li className="links-friendwebsite"><a href="https://www.tripadvisor.com/">TripAdvisor</a></li>
                    <li className="links-friendwebsite"><a href="https://www.vrbo.com/">Vrbo</a></li>
                    <li className="links-friendwebsite"><a href="https://www.expedia.com/">Expedia</a></li>
                    <li className="links-friendwebsite"><a href="https://homeaway-com.com/">HomeAway</a></li>
                </ul>
            </div>
        </div>

    )
}

export default List;