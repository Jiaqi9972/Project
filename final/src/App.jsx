import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import { useState } from 'react';
import Overlay from './Overlay';

function App() {

  const [page, setPage] = useState('/');
  const [isChildOpen, setIsChildOpen] = useState(false);

  function onNav(event) {
    event.preventDefault();
    setPage(event.target.getAttribute('href'));
  }

  return (
    <div className="app">
      <Header
        onNav={onNav}
        setIsChildOpen={setIsChildOpen} 
        />
      <Main page={page} />
      <Footer />

      {isChildOpen && <Overlay/>}
    </div>
  );
}

export default App;
