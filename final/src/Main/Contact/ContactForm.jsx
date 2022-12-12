import './ContactForm.css';
import { useState } from 'react';
import ThankPage from './ThankPage';

function ContactForm() {

    const [errorNameMessage, setErrorNameMessage] = useState("");
    const [errorPhoneMessage, setErrorPhoneMessage] = useState("");
    const [errorEmailMessage, setErrorEmailMessage] = useState("");
    const [errorQuestionMessage, setErrorQuestionMessage] = useState("");
    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [phoneValue, setPhoneValue] = useState("");
    const [questionValue, setQuestionValue] = useState("");
    const [showThank, setShowThank] = useState(false);

    const handleNameChange = () => {
        if (nameValue === "") {
            setErrorNameMessage("This field can not be blank.");
            return false;
        } else {
            setErrorNameMessage("");
            return true;
        }
    }
    const handleEmailChange = () => {
        if (emailValue === "") {
            setErrorEmailMessage("This field can not be blank.");
            return false;
        } else if (emailValue.indexOf('@') === -1) {
            setErrorEmailMessage("This field should include an '@'.");
            return false;
        } else {
            setErrorEmailMessage("");
            return true;
        }
    }
    const handlePhoneChange = () => {
        if (phoneValue === "") {
            setErrorPhoneMessage("This field can not be blank.");
            return false;
        } else if (phoneValue.length < 6) {
            setErrorPhoneMessage("This field should have more than 6 numbers.");
            return false;
        } else {
            setErrorPhoneMessage("");
            return true;
        }
    }
    const handleQuestionChange = () => {
        if (questionValue === "") {
            setErrorQuestionMessage("This field can not be blank.");
            return false;
        } else {
            setErrorQuestionMessage("");
            return true;
        }
    }

    return (
        <form className="contact-form">
            <div className="contact-input">
                <span className="contact-inputtitle">Name:</span>
                <input
                    className="contact-inputvalue"
                    type="text"
                    value={nameValue}
                    onChange={(e) => setNameValue(e.target.value)}
                />
                <span className="contact-errormessage">{errorNameMessage}</span>
            </div>

            <div className="contact-input">
                <span className="contact-inputtitle">Email:</span>
                <input
                    className="contact-inputvalue"
                    type="text"
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                />
                <span className="contact-errormessage">{errorEmailMessage}</span>
            </div>

            <div className="contact-input">
                <span className="contact-inputtitle">Phone:</span>
                <input
                    className="contact-inputvalue"
                    type="text"
                    value={phoneValue}
                    onChange={(e) => setPhoneValue(e.target.value)}
                />
                <span className="contact-errormessage">{errorPhoneMessage}</span>
            </div>

            <div className="contact-input">
                <span className="contact-inputtitle">What can we help?</span>
                <input
                    className="contact-inputvalue"
                    type="text"
                    value={questionValue}
                    onChange={(e) => setQuestionValue(e.target.value)}
                />
                <span className="contact-errormessage">{errorQuestionMessage}</span>
            </div>

            <button
                onClick={(e) => {
                    if (!handleEmailChange() | !handleNameChange() | !handlePhoneChange() | !handleQuestionChange()) {
                        e.preventDefault();
                    } else {
                        e.preventDefault();
                        setShowThank(true);
                    }

                }}
                className="contact-button"
                type="Submit">Submit</button>
            <ThankPage showThank={showThank} setShowThank={setShowThank} />
        </form>

    )
}
export default ContactForm;

