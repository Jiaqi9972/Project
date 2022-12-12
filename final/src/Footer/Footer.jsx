import List from "./List";
import Message from "./Message";
import './Footer.css';

function Footer(){
    return(
        <footer>
            <Message className="footer__message" />
            <List className="footer__linkstitle"/>
        </footer>
    );
}

export default Footer;