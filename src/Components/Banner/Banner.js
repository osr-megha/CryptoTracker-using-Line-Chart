import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import Carousel from "./Carousel";



const Banner = () => {

  return (
    <React.Fragment>
    <Stack sx={{backgroundImage:'url(./banner2.jpeg)'}}>
      <Container sx={{
        height:400,
        display:'flex',
        flexDirection:'column',
        paddingTop:25,
        justifyContent:'space-around'
      }}>
      <Stack sx={{
        display:'flex',
        height:'40%',
        flexDirection:'column',
        justifyContent:'center',
        textAlign:'center'
      }}>
      <Typography
      variant='h2'
      sx={{
        fontWeight:'bold',
        marginBottom:2,
        fontFamily:'Montserrat'
      }}>
      Crypto Tracker
      </Typography>
      <Typography
      variant='subtitle2'
      sx={{
        color:'darkgray',
        textTransform:'capitalize',
        fontFamily:'Montserrat',
        marginBottom:10,
      }}>
      Get all the info regarding your favourite Crypto Currency
      </Typography>
      
      </Stack>
      
      <Carousel />
      </Container>

      </Stack>
      
    </React.Fragment>
  );
};

export default Banner;
