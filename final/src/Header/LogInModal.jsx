import { useState } from 'react';
import SignUpModal from './SignUpModal';
import './LogInModal.css';
import UsernameInput from './UsernameInput';
import PasswordInput from './PasswordInput';
import AlertBox from './AlertBox';

function LogInModal({ showModal, setShowModal, setIsChildOpen, setLoggedIn }) {
    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const [showAlertBox, setShowAlertBox] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleUsernameChange = (username) => {
        setUsername(username);
    };

    const handlePasswordChange = (password) => {
        setPassword(password);
    };
    return (
        <dialog open={showModal} className="header__loginmodalframe">
            <div className="header__loginmodal">
                <h2 className="loginmodal-title">
                    <i className="fa-solid fa-paw"></i>Log in
                </h2>
                <UsernameInput
                    classNamePrefix="loginmodal"
                    onUsernameChange={handleUsernameChange} />
                <PasswordInput
                    classNamePrefix="loginmodal"
                    onPasswordChange={handlePasswordChange} />

                <div className="loginmodal-button">
                    <button
                        onClick={() => {
                            setShowSignUpModal(true);
                        }}
                        className="loginmodal-signup"
                    >Sign Up</button>

                    <button
                        onClick={() => {
                            if (username === "" || password === "") {
                                setShowAlertBox(true);
                            } else {
                                setLoggedIn(true);
                                setIsChildOpen(false);
                                setShowModal(false);
                            }
                        }}
                        className="loginmodal-login"
                    >Log In</button>

                    <button
                        onClick={() => {
                            setShowModal(false);
                            setIsChildOpen(false);
                        }}
                        className="loginmodal-cancel"
                    >Cancel</button>

                </div>
            </div>
            <SignUpModal
                showSignUpModal={showSignUpModal}
                setShowSignUpModal={setShowSignUpModal}
                showAlertBox={showAlertBox}
                setShowAlertBox={setShowAlertBox}
            />
            <AlertBox
                showAlertBox={showAlertBox}
                setShowAlertBox={setShowAlertBox}
            />
        </dialog>

    )
}

export default LogInModal;