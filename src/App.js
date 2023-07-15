// import Counter from './features/counter/Counter';
import './App.css';
import SignUp from './features/auth/components/SignUp';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Cart from './features/cart/Cart';
import CartPage from './pages/CartPage';
import CheckOut from './pages/CheckOut';


function App() {

 

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home/>)
  },
  {
    path: "/login",
    element: (<LoginPage/>)
  },
  {
    path: "/signup",
    element: <SignUpPage/>
  },
  {
    path: "/cart",
    element: <CartPage/>
  },
  {
    path: "/checkout",
    element: <CheckOut/>
  },



]);

  return (
  <div> 
 
 <RouterProvider router={router} />
   



  </div>
    );
}

export default App;
