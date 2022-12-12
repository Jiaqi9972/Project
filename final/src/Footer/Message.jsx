import './Message.css'

function Message() {
    return (
        <div className="footer__message">
            <div className="message-company">
                <img
                    onClick={() => window.location.href = '/'}
                    src="imgs/logo text transparent.png"
                    className="message-logo"
                    alt="Catgng Logo footer"
                />
                <div>
                    <h2 className='message-slogonpart1'><i className="fa-solid fa-paw"></i>The Cat's Meow: </h2>
                    <h2 className='message-slogonpart2'>Housing designed with the feline in mind.</h2>
                </div>
            </div>

            <h4 className='message-snstitle'>Learn more at:</h4>
            <div className='message-sns'>
                <a href="https://twitter.com/"><i class="fa-brands fa-twitter"></i></a>
                <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://www.tiktok.com/en/"><i class="fa-brands fa-tiktok"></i></a>
                <a href="https://www.youtube.com/"><i class="fa-brands fa-youtube"></i></a>
                <a href="https://discord.com/"><i class="fa-brands fa-discord"></i></a>
            </div>
            <h6 className='message-copyright'>@Copyright 2022 Catgng</h6>
        </div>
    )
}
export default Message;