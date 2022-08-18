import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './Components/Header';
import Homepage from './Pages/Homepage';
import Coinpage from './Pages/Coinpage';
import React from 'react';
import { Stack, AppBar, Toolbar } from '@mui/material';


function App() {


  return (
    <React.Fragment>
   <BrowserRouter>
   <AppBar position='static' sx={{bgcolor:"#14161a", minHeight:'100vh'}}>
   <Toolbar >
   <Header />
   </Toolbar>
   
   
   <Routes>
   <Route exact path='/' element={<Homepage />} />
   <Route exact to path='/coins/:id' element={<Coinpage />} />

   </Routes> 
   </AppBar>
  
   </BrowserRouter>
   </React.Fragment>
  );
}

export default App;
