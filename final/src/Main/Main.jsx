import Exhibition from './Exhibition/Exhibition';
import CatHomes from './CatHomes/CatHomes';
import About from './About/About';
import Contact from './Contact/Contact';
import './Main.css';

function Main({page}) {
    return (
        <main>
            {(page === '/') && <About/>}
            {(page === '/CatHomes.html') && <CatHomes/>}
            {(page === '/Exhibition.html') && <Exhibition/>}
            {(page === '/Contact.html') && <Contact/>}

        </main>
    );
}

export default Main;