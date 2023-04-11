import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './components/login/Login';
import Register from './components/login/Register';
import Steps from './components/StepsComponent';
import Cart from './pages/Cart';
import Home from './pages/Home';
import OrderPlacedDetails from './pages/OrderPlacedDetails';
import Payment from './pages/Payment';
import ProductDetail from './pages/ProductDetail';
import Profile from './pages/Profile';
import Shipping from './pages/Shipping';
import Dashboard from './pages/Dashboard';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import AdminUsersPage from './pages/AdminUsersPage';
import AdminProductsPage from './pages/AdminProductsPage';
import AdminOrdersPage from './pages/AdminOrdersPage';
import About from './pages/About';


console.log(process.env.REACT_APP_BACKEND_URL);
function App() {

  const userLogin = useSelector((state) => state.userLogin)
  const { userData } = userLogin

  const {pathname} = useLocation()

  console.log(pathname.split('/')[2]);
  return (
    <div className="App">
      {
        !pathname.includes('admin') && <Header />
      }
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/search/:keyword' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/product/:id' element={<ProductDetail />} />
        <Route exact path='/cart/:id?' element={<Cart />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/shipping' element={<Steps />} />
        <Route exact path='/payment' element={<Payment />} />
        <Route exact path='/order/:orderId' element={<OrderPlacedDetails />} />
        <Route exact path='/admin/dashboard' element={userData?.isAdmin ? <Dashboard /> : <Login />} />
        <Route exact path='/admin/users' element={userData?.isAdmin ? <AdminUsersPage /> : <Login />} />
        <Route exact path='/admin/products' element={userData?.isAdmin ? <AdminProductsPage /> : <Login />} />
        <Route exact path='/admin/orders' element={userData?.isAdmin ? <AdminOrdersPage /> : <Login />} />
      </Routes>
    </div>
  );
}

export default App;
