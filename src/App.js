import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Item from './components/Item/Item';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './components/CartWidget/CartWidget';
import productos from './services/asyncMock';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'¡Bienvenidos a PRIGS!'}/>
      <div className="productosContainer">
                {productos.map((item) => (
                    <Item key={item.id} {...item}/>
                ))}
            </div>
    </div>
  );
}

export default App;
