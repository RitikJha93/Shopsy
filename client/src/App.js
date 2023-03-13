import { Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/product/:id' element={<ProductDetail />} />
        <Route exact path='/cart/:id?' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
