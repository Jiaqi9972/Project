import menu from './menu.js';
import './GlobalNav.css';

function GlobalNav({ className, onNav }) {

    const list = menu.map(item => {
        return (
            <li className="global-nav__item"
                key={item.name}>
                <a onClick={onNav}
                    className="global-nav__link" href={item.path}>
                    {item.name}
                </a>
            </li>
        );
    });

    return (
        <nav className={`global-nav ${className}`}>
            <ul className="global-nav__list">
                {list}
            </ul>
        </nav>
    );
}
export default GlobalNav;