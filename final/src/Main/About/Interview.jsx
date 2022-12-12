import comments from "./comments";
import './Interview.css';
import { useState } from "react";

function Interview() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClickLeft = () => {
        if (currentIndex === 0) {
            setCurrentIndex(3)
        } else {
            setCurrentIndex(currentIndex - 1)
        }
    }

    const handleClickRight = () => {
        if (currentIndex === 3) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }

    const list = comments.map((items, index) => {
        if (currentIndex === index) {
            return (
                <li className="interview-information" key={items.name}>
                    <p className='interview-message'>{items.comment}</p>
                    <img className='interview-img' src={items.img} alt={items.name} />
                    <p className='interview-name'>{items.name} </p>
                </li>
            )
        } else {
            return null;
        }

    })
    return (
        <div className="about__interview">
            <i onClick={handleClickLeft}
                className="fa-solid fa-angle-left"></i>
            <ul className="interview-comments">
                {list}
            </ul>
            <i onClick={handleClickRight}
                className="fa-solid fa-angle-right"></i>
        </div>
    );
}

export default Interview;