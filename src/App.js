import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Route} from "react-router-dom"
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Login from './Component/Login';
import Search from './Component/Search';
import Forgot from './Component/Forgot';
import Registration from './Component/Registration';
import Newpassword from './Component/Newpassword';
import Cake from './Component/Cake';
import { ToastContainer, toast } from 'react-toastify';
// import Details from './Component/Details';
import Dashboard from "./Component/Dashboard"
import Plus from './Component/Plus';
import CakeDetails from './Component/CakeDetails';
import Details from './Component/Details';
import Cart from './Component/Cart';
import Product from './Component/Product';
import Checkout from './Component/Checkout';
import OrderList from './Component/OrderList';
import Addcake from './Component/Addcake';
import Routes from './Component/Routes';
import CartUi from './Component/CartUi';








function App() {
 
  return (
    <div className="App">

      <BrowserRouter>
      
      <Navbar />
      <div>
       <Route path="/login" Form component={Login}/>
       <Route path="/" exact Home component={Home}/>
       <Route path="/Search" Form component={Search}/>
       <Route path="/Forgot" Form component={Forgot}/>
       <Route path="/Registration" Form component={Registration}/>
       <Route path="/Newpassword" Form component={Newpassword}/>
       <Route path="/Cake" Form component={Cake}/>
       <Route path="/Details" Form component={Details}/>
       <Route path="/Dashboard" component={Dashboard}></Route>
       <Route path="/Plus" Form component={Plus}/>
       <Route exact path="/CakeDetails/:id" exact component={CakeDetails} />
       <Route exact path="/Details/:id" component={Details} />
       <Route path="/Cart" Form component={Cart}/>
       <Route path="/Product" Form component={Product}/>
       <Route path="/Checkout" Form component={Checkout}/>
       <Route path="/OrderList" Form component={OrderList}/>
       <Route path="/Addcake" Form component={Addcake}/>
       <Route path="/routes" component={Routes}/>
       <Route path="/cartui" component={CartUi}/>
       {/* <Route path="/" exact component={Home}/>
       <Route path="/" exact component={Home}/> */}
    </div>
    </BrowserRouter>
    <ToastContainer />

</div>
  );
      }
export default App;
