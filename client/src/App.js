import { Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './components/login/Login';
import Register from './components/login/Register';
import Cart from './pages/Cart';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/product/:id' element={<ProductDetail />} />
        <Route exact path='/cart/:id?' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
