import React from 'react';
import {Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import './App.css';
import Signup from './components/Signup';
import DinerDash from './components/Diner/DinerDash'
import {DinersListProvider} from './Contexts/DinerContext'
import TruckDetails from './components/Diner/TruckDetails'
// import MainLogin from './MainLogin'
import OperatorLogin from './components/Operator/OperatorLogin'
import OperatorSignup from './components/OperatorSignup'
import OperatorDashboard from './components/Operator/OperatorDashboard'
import OperatorTrucks from './components/Operator/OperatorTrucks'
import AddTruckForm from './components/Operator/AddTruckForm'
import UpdateTruck from'./components/Operator/UpdateTruck'
import Menu from './components/Operator/Menu'
import MenuForm from './components/Operator/MenuForm'


function App() {


  return (
  
    <DinersListProvider>
    <div className="App">
    <Switch>
    <Route path='/' exact component ={OperatorSignup}/>
    <Route path='/OperatorLogin' exact component ={OperatorLogin}/>
    <Route path='/UserLogin' exact component ={Login}/>
    <Route path='/Signup' component={Signup}/>
    <PrivateRoute path='/Diner/DashBoard' exact component={DinerDash}/>
    <PrivateRoute path='/Operator/DashBoard' exact component={OperatorDashboard}/>
    <PrivateRoute path='/Diner/Dashboard/truck/:id'  component={TruckDetails} />
    <PrivateRoute path='/Operator/Dashboard/trucks/:id' exact component={OperatorTrucks}  />
    <PrivateRoute path='/Operator/Dashboard/trucks/add/:id' exact component={AddTruckForm}/>
    <PrivateRoute path='/Operator/Dashboard/trucks/update/:id' exact  component={UpdateTruck}/>
    <PrivateRoute path='/Operator/Dashboard/trucks/update/menu/:id' exact  component={Menu}/>
    <PrivateRoute path='/Operator/Dashboard/trucks/update/menu/create/:id' exact  component={MenuForm}/>
    </Switch>
    </div>
    </DinersListProvider>
  );
}

export default App;
