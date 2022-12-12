import library from "./library";
import { useState } from "react";
import './Exhibition.css';

function Exhibition() {

    const [libraryIndex, setLibraryIndex] = useState(0);

    const handleLeft = () => {
        console.log({ librarylist }.name);
        if (libraryIndex === 0) {
            setLibraryIndex(4)
        } else {
            setLibraryIndex(libraryIndex - 1)
        }
    }
    const handleRight = () => {

        console.log(libraryIndex);
        if (libraryIndex === 4) {
            setLibraryIndex(0)
        } else {
            setLibraryIndex(libraryIndex + 1)
        }
    }

    const librarylist = library.map((items, index) => {
        if (index === libraryIndex) {
            return (
                <li className="exhibition-list">
                    <img className="exhibition-listphoto" src={items.img} alt={items.name} />
                    <p className="exhibition-name">{items.name}</p>
                </li>
            )
        } else {
            return false;
        }
    })


    return (
        <div className="main__exhibition">
            <i onClick={handleLeft}
                className="fa-solid fa-angle-left"></i>
            <div>
                <p className="exhibition-title">Gallery</p>
                <ul>
                    {librarylist}
                </ul>
            </div>
            <i onClick={handleRight}
                className="fa-solid fa-angle-right"></i>
        </div>
    );
}

export default Exhibition;