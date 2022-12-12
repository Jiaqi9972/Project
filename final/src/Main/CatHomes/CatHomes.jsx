import homes from './homes';
import './CatHomes.css';
import News from './News';

function CatHomes() {

    const homelist = homes.map(items => {
        return (
            <li className="cathomes__card" key={items.name}>
                <img className='card-img' src={items.src} alt={items.name} />
                <p className='card-name'>{items.name}</p>
                <p className='card-score'><i className="fa-solid fa-star"></i>{items.score}</p>
                <p className='card-price'>{items.price}</p>
                <p className='card-features'>{items.features} </p>
            </li>
        )
    })

    return (
        <div className="main__cathomes">
            <p className="cathomes__title">
                Choose your home!
            </p>
            <p className="cathomes__subtitle">
                And get news from us!
            </p>
            <News className="cathomes__news" />

            <ul className="cathomes__cards">
                {homelist}
            </ul>
        </div>
    );
}

export default CatHomes;