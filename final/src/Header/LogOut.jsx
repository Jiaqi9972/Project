import './LogOut.css'

function LogOut({ showLogOut, setShowLogOut, setIsChildOpen, setLoggedIn }) {
    return (
        <dialog className="header__logoutframe" open={showLogOut} >
            <div className="header__logout">
                <span className="logout-message">
                    Do you want to log out?
                </span>
                <button
                    className="logout-button"
                    onClick={() => {
                        setShowLogOut(false);
                        setIsChildOpen(false);
                        setLoggedIn(false);
                    }}>
                    <i className="fa-solid fa-paw"></i>Meow!
                </button>
            </div>
        </dialog>
    )
}
export default LogOut;

//