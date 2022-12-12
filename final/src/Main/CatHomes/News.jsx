import { useState } from "react";
import './News.css';
import Subscribe from "./Subscribe";

function News() {
    const [isChecked, setIsChecked] = useState(false);
    const [nameError,setNameError] = useState("");
    const [emailError,setEmailError] = useState("");
    const [phoneError,setPhoneError] = useState("");
    const [name,setName] = useState("");
    const [email,setEmail] =useState("");
    const [phone,setPhone] = useState("");
    const [showSubscribe,setShowSubscribe] = useState(false);

    const handleCheckBoxChange = (e) => {
        setIsChecked(!isChecked && e.target.checked)
    }

    const handleName = () => {
        if (name === "") {
            setNameError("This field can not be blank.");
            return false;
        } else {
            setNameError("");
            return true;
        }
    }
    const handleEmail = () => {
        if (email === "") {
            setEmailError("This field can not be blank.");
            return false;
        }else if (email.indexOf('@') === -1) {
            setEmailError("This field should include an '@'.");
            return false;
        } else {
            setEmailError("");
            return true;
        }
    }
    const handlePhone = () => {
        if (phone === "") {
            setPhoneError("This field can not be blank.");
            return false;
        } else if (phone.length < 6) {
            setPhoneError("This field should have more than 6 numbers.");
            return false;
        }else {
            setPhoneError("");
            return true;
        }
    }
    const handleButton = (e) => {
        if(isChecked){
            if (!handleEmail() | !handleName()| !handlePhone()) {
                e.preventDefault();
            } else {
                e.preventDefault();
                setShowSubscribe(true);
            }
        }else{
            if (!handleEmail() | !handleName()) {
                e.preventDefault();
            } else {
                e.preventDefault();
                setShowSubscribe(true);
            }
        }
    }



    return (
        <form className="cathomes__news">
            <h2 className="news-message">Fill in the blanks and we will send you latest deals</h2>
            <label className="news-formelement">
                <span className="news-title">Name:</span>
                <input type="text" className="news-input" 
                onChange={(e) => setName(e.target.value)}/>
                <span className="news-error">{nameError}</span>
            </label>
            <label className="news-formelement">
                <span className="news-title">Email:</span>
                <input type="text" className="news-input" 
                onChange={(e) => setEmail(e.target.value)}/>
                <span className="news-error">{emailError}</span>
            </label>
            <label className="news-checkmessage">
                <input
                    checked={isChecked}
                    type="checkbox"
                    className="news-checkbox"
                    onChange={handleCheckBoxChange} />
                <span>Also want news on smart phone?</span>
            </label>
            <label className="news-formelement">
                {isChecked && <span className="news-title">Phone number:</span>}
                {isChecked && <input className="news-input" type="text" 
                onChange={(e) => setPhone(e.target.value)}/>}
                {isChecked && <span className="news-error">{phoneError}</span>}
            </label>
            <button className="news-button" onClick={handleButton}>Submit</button>
            <Subscribe showSubscribe={showSubscribe} setshowSubscribe={showSubscribe}/>
        </form>
    )
}
export default News;