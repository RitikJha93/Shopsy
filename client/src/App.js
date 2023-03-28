import { Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './components/login/Login';
import Register from './components/login/Register';
import Steps from './components/StepsComponent';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Payment from './pages/Payment';
import ProductDetail from './pages/ProductDetail';
import Profile from './pages/Profile';
import Shipping from './pages/Shipping';


console.log(process.env.REACT_APP_BACKEND_URL);
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
        <Route exact path='/profile' element={<Profile />} /> 
        <Route exact path='/shipping' element={<Steps />} /> 
        <Route exact path='/payment' element={<Payment />} /> 
      </Routes>
    </div>
  );
}

export default App;
