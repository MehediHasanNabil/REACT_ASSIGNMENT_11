import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import Servicelist from './Components/Customer/Servicelist/Servicelist';
import Order from './Components/Customer/Order/Order';
import Review from './Components/Customer/Review/Review';
import AdminServices from './Components/Admin/AdminServices/AdminServices';
import AddService from './Components/Admin/AddService/AddService';
import MakeAdmin from './Components/Admin/MakeAdmin/MakeAdmin';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loginUser, setloginUser] = useState({});
  return (
    <UserContext.Provider value={[loginUser, setloginUser]}>
      <Router>
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/customer/order">
              <Order />
            </Route>
            <Route path="/customer/service">
              <Servicelist />
            </Route>
            <Route path="/customer/review">
              <Review />
            </Route>
            <PrivateRoute path="/admin/serviceList">
              <AdminServices />
            </PrivateRoute>
            <PrivateRoute path="/admin/addService">
              <AddService />
            </PrivateRoute>
            <PrivateRoute path="/admin/makeAdmin">
              <MakeAdmin />
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
