import logo from './logo.svg';
import './App.css';
import './Stylesheets/Layout.css';
import './Stylesheets/products.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ProductInfo from './Pages/ProductInfo';
import Cart from './Pages/Cart';
import {Route, BrowserRouter, Routes} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/login' exact element={<Login/>} />
          <Route path='/register' exact element={<Register/>} />
          <Route path='/productinfo/:productid' exact element={<ProductInfo/>} />
          <Route path='/cart' exact element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
