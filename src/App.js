import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import { CartContextProvider } from './context/cartContext';
import CartContainer from "./components/CartContainer/CartContainer";


function App() {
  return (
    <div className='app'>
      <CartContextProvider>
        
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryID" element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CartContainer/>}></Route>
          </Routes>
        </BrowserRouter>

      </CartContextProvider>
    </div>
  );
}

export default App;