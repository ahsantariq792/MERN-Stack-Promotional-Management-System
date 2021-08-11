import React, {useEffect} from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Navbar from './components/Navbar';
import Signupcustomer from './components/Signupcustomer';
import SignupRestaurant from './components/Signuprestaurant';
import LoginAdmin from './components/LoginAdmin';
import LoginCustomer from './components/LoginCustomer';
import LoginRestaurant from './components/LoginRestaurant';
import Foods from './components/Foods';
import Foodsbcustomer from './components/Foodsbcustomer';
import Foodskhan from './components/Foodskhan';
import Foodskcustomer from './components/Foodskcustomer';
import Foodsjawaid from './components/Foodsjawaid';
import Foodsjcustomer from './components/Foodsjcustomer';
import Foodspizza from './components/Foodspizza';
import Foodspcustomer from './components/Foodspcustomer';
import Foodsshaheen from './components/Foodsshaheen';
import Foodsscustomer from './components/Foodsscustomer';
import Foodscafe from './components/Foodscafe';
import Foodscafecustomer from './components/Foodscafecustomer';
import Promoform from './components/Promoform';
import Promoform1 from './components/Promoform1';
import Promoform2 from './components/Promoform2';
import Promoform3 from './components/Promoform3';
import Promoform4 from './components/Promoform4';
import Promoform5 from './components/Promoform5';
import Payment from './components/Payment';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Foodsccustomer from './components/Foodscafecustomer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/home" exact component={Home} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/about" exact component={About} />
          <Route path="/signupcustomer" exact component={Signupcustomer} />
          <Route path="/logincustomer" exact component={LoginCustomer} />
          <Route path="/signuprestaurant" exact component={SignupRestaurant} />
          <Route path="/loginrestaurant" exact component={LoginRestaurant} />
          <Route path="/loginadmin" exact component={LoginAdmin} />
          <Route path="/foods" exact component={Foods} />
          <Route path="/foodsbcustomer" exact component={Foodsbcustomer} />

          <Route path="/foodskhan" exact component={Foodskhan} />
          <Route path="/foodskcustomer" exact component={Foodskcustomer} />
          <Route path="/foodsjawaid" exact component={Foodsjawaid} />
          <Route path="/foodsjcustomer" exact component={Foodsjcustomer} />
          <Route path="/foodspizza" exact component={Foodspizza} />
          <Route path="/foodscustomer" exact component={Foodspcustomer} />
          <Route path="/foodspcustomer" exact component={Foodspcustomer} />
          <Route path="/foodsshaheen" exact component={Foodsshaheen} />
          <Route path="/foodsscustomer" exact component={Foodsscustomer} />

          <Route path="/foodscafe" exact component={Foodscafe} />
          <Route path="/foodscafecustomer" exact component={Foodscafecustomer} />

          <Route path="/payment" exact component={Payment} />
          <Route path="/promoform" exact component={Promoform} />
          <Route path="/promoform1" exact component={Promoform1} />
          <Route path="/promoform2" exact component={Promoform2} />
          <Route path="/promoform3" exact component={Promoform3} />
          <Route path="/promoform4" exact component={Promoform4} />
          <Route path="/promoform5" exact component={Promoform5} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
