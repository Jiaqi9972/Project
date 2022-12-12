import './SignUpModal.css';
import UsernameInput from './UsernameInput';
import PasswordInput from './PasswordInput';
import ConfirmPasswordInput from './ConfirmPasswordInput';
import { useState } from 'react';

function SignUpModal({ showSignUpModal, setShowSignUpModal, setShowAlertBox }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmPassword] = useState('');

    const handleUsernameChange = (username) => {
        setUsername(username);
    };

    const handlePasswordChange = (password) => {
        setPassword(password);
    };

    const handleConfirmedPasswordChange = (confirmedPassword) => {
        setConfirmPassword(confirmedPassword);
    };

    return (
        <dialog open={showSignUpModal} className="header__signupmodalframe">
            <div className="header__signupmodal">
                <h2 className="signupmodal-title">
                    <i className="fa-solid fa-paw"></i>Sign Up
                </h2>
                <UsernameInput
                    classNamePrefix="signupmodal"
                    onUsernameChange={handleUsernameChange} />
                <PasswordInput
                    classNamePrefix="signupmodal"
                    onPasswordChange={handlePasswordChange} />
                <ConfirmPasswordInput
                    classNamePrefix="signupmodal"
                    onConfirmPasswordChange={handleConfirmedPasswordChange}
                    password={password} />
                <div className="signupmodal-button">
                    <button
                        onClick={() => {
                            if (username === "" || password === "" || confirmedPassword === "") {
                                setShowAlertBox(true);
                            } else {
                                setShowSignUpModal(false);
                            }
                        }}
                        className="signupmodal-signup"
                    >Sign Up</button>
                    <button
                        onClick={() => setShowSignUpModal(false)}
                        className="signupmodal-cancel">Cancel</button>
                </div>
            </div>
            
        </dialog>
    )
}

export default SignUpModal;