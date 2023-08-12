import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import { CartContextProvider } from './context/cartContext';
import CartContainer from "./components/CartContainer/CartContainer";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import OrderConfirm from './components/OrderConfirm/OrderConfirm';
import Checkout from './components/Checkout/Checkout';


function App() {
  return (
    <div className='App'>
      <CartContextProvider>
        
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryID" element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CartContainer/>}></Route>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/order-confirmation/:id" element={ <OrderConfirm/>}/>
          </Routes>
        </BrowserRouter>

      </CartContextProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;