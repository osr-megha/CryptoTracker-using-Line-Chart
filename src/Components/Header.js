import { AppBar, Container, MenuItem, Select, Toolbar, Typography, createTheme, ThemeProvider } from '@mui/material'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';

const Header = () => {

  const navigate = useNavigate(); //In react-router-dom v6 useHistory() is replaced by useNavigate()


  const { currency, setCurrency} = CryptoState();
  console.log(currency);

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <React.Fragment>
    <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position='static'>
    <Container>
     <Toolbar>
     <Typography 
      sx={{
      flex:1,
      color:'gold',
      fontFamily:'Montserrat',
      fontWeight:'bold',
      cursor:'pointer'
     }}
     onClick={()=>navigate('/')}    // instead of useHistory we use 'useNavigate' & instead of history.push we write navigate('/home or whatever route we have to send to' )
     variant = 'h6'
     >Crypto Hunter</Typography>
     <Select 
     variant='outlined' 
     sx={{width:100, height:40, marginRight:15}}
     value={currency}
     onChange={(e)=>setCurrency(e.target.value)}
     >
     <MenuItem value={'USD'}>USD</MenuItem>
     <MenuItem value={'INR'}>INR</MenuItem>

     
     </Select>
     </Toolbar>
    </Container>
    
    </AppBar>
    </ThemeProvider> 
    </React.Fragment>
  )
}

export default Header