import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Cart from './component/components/Cart';
import Menu from './component/klik/Menu';
import MostPopular from './component/Popular/MostPopular';

function App() {
  return (
    <>

    <Header/>
    <Home />  
    <MostPopular />
    <Menu />
    <Cart />
    
    </>
    
  );
}

export default App;
