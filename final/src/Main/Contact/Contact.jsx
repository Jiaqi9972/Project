import ContactForm from "./ContactForm";
import './Contact.css';

function Contact() {
    return (
        <div className="main__contact">
            <div className="contact-title">
                <i className="fa-solid fa-paw"></i>Any advice is welcome!
            </div>
            <ContactForm />
        </div>
    );
}

export default Contact;