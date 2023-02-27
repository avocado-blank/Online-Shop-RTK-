import Cart from "./components/Cart";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Notfound from "./components/Notfound";
import { Globalstyle } from "./styles/Globalstyle";
import { useSelector } from "react-redux";
import ShopCart from "./components/ShopCart";

function App() {

  const { status } = useSelector(state => state.product)
  return (
    <div className="App">
      <BrowserRouter>
        <Globalstyle></Globalstyle>
        <Navbar />
        <Switch>
          <Route path='/notfound' exact component={Notfound} />
          <Route path='/shopcart' exact component={ShopCart} />
          <Route path={status === null ? '/notfound' : '/detail'} exact component={Cart} />
          <Route path='/' exact component={Home} />
          <Redirect to='/notfound' />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
