import './Subscribe.css'

function Subscribe({ showSubscribe, setshowSubscribe }) {
    return (
        <dialog open={showSubscribe} className="news-subscribeframe">
            <div className="news-subscribe">
                <span>Thanks for your subscription!</span>
                <button onClick={() => setshowSubscribe(false)} className="news-subscribebutton" >Meow!</button>
            </div>
        </dialog>
    )
}
export default Subscribe;