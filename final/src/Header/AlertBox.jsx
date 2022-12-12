import './AlertBox.css'

function AlertBox({ showAlertBox, setShowAlertBox }) {

    return (
        <dialog open={showAlertBox} className="header__alertboxframe">
            <div className="header__alertbox">
                <span className="alertbox-message">
                    Your message is unvalid, please try again.
                </span>
                <button
                    className="alertbox-button"
                    onClick={() => setShowAlertBox(false)}>
                    <i className="fa-solid fa-paw"></i>Meow!
                </button>
            </div>
        </dialog>
    )
}

export default AlertBox;