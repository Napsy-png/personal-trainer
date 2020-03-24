import React from 'react';
import './App.css';
import Customerlist from './components/Customerlist';
import Trainings from './components/Trainings';
import Navbar from './components/Navbar';
//import NavbarMU from './components/NavbarMU';
import {BrowserRouter, Switch, Route ,} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Personal Training 
          </Typography>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
        <div>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Customerlist} />
            <Route exact path="/trainings" component={Trainings} />
          </Switch>
        </div>
      </BrowserRouter>
     
     
    </div>
  );
}

export default App;
