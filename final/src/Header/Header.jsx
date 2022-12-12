import './Header.css';
import GlobalNav from './GlobalNav';
import { useState } from 'react';
import LogInModal from './LogInModal';
import LogOut from './LogOut';

function Header({ onNav, setIsChildOpen }) {

    const [showNav, setShowNav] = useState(false);
    const setNavToggle = () => setShowNav(showNav => !showNav);
    const [showModal, setShowModal] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [showLogOut, setShowLogOut] = useState(false);



    return (
        <header className="header">
            <a className="header__skiplink" href="/">Skip to content</a>
            <img
                src="imgs/logo transparent.png"
                className="header__logo"
                alt="Catgng Logo"
                onClick={() => window.location.href = '/'}
            />
            <h1
                onClick={() => window.location.href = '/'}
                className="header__title">
                Catgng
            </h1>
            <GlobalNav onNav={onNav}
                className={showNav ? "nav-open header__nav" : "header__nav"} />
            <i className="fa-solid fa-bars"
                onClick={setNavToggle}>
            </i>
            {!loggedIn && <button
                onClick={() => {
                    setIsChildOpen(true);
                    setShowModal(true);
                }}
                className="header__login">
                <i className="fa-solid fa-paw"></i>
                Log in
            </button>}
            {loggedIn && <button
                onClick={() => {
                    setIsChildOpen(true);
                    setShowLogOut(true);
                }}
                className="header__login">
                <i className="fa-solid fa-paw"></i>
                Hello,cat
            </button>}
            <LogInModal
                showModal={showModal}
                setShowModal={setShowModal}
                setIsChildOpen={setIsChildOpen}
                setLoggedIn={setLoggedIn}
            />
            <LogOut
                showLogOut={showLogOut}
                setShowLogOut={setShowLogOut}
                setIsChildOpen={setIsChildOpen}
                setLoggedIn={setLoggedIn}
            />

        </header>
    );
}

export default Header;