import './ThankPage.css'

function ThankPage({ showThank, setShowThank }) {
    return (
        <dialog open={showThank} className="contact-thankframe">
            <div className="contact-thank">
                <span>Thanks for your advice!</span>
                <span>We will contact you ASAP.</span>
                <button onClick={() => setShowThank(false)} className="contact-thankbutton" >Meow!</button>
            </div>
        </dialog>
    )
}
export default ThankPage;

