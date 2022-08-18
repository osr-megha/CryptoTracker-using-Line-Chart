import axios from "axios";
import React, { useEffect, useState } from "react";
import CoinInfo from "../Components/CoinInfo";
import { useParams } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import { SingleCoin } from "../config/api";
import { Typography, LinearProgress } from "@mui/material";
import ReactHTMLParser from 'react-html-parser'
import {numberWithCommas} from '../Components/Banner/Carousel'
import './styles.css'


const Coinpage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoin(data);
  };

  console.log(coin, "COIN");

  useEffect(() => {
    fetchCoin();
  }, []);

  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;


  return (
    <React.Fragment>
      <div className="container" sx={{display:'flex'}}>
        <div className='sidebar' style={{
          
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 25,
          borderRight: '2px solid grey',
        }}
        sx={{
          // width: {sm:'100%', xl:'30%'},
        }}>
          {/**Sidebar */}
          {/**Image of Coin*/}
                <img 
                src={coin.image.large}
                alt={coin.name}
                height='200'
                style={{marginBottom:20}}
                />
  
            <Typography variant='h3'className='heading' sx={{fontWeight:'bold', marginBottom:20, fontFamily:'Montserrat'}}>
            {coin.name}
            </Typography>
    <Typography variant='subtitle1' className='description' 
    sx={{width:'100%', fontFamily:'Montserrat', padding:25,
  paddingBottom:15,paddingTop:0, textAlign:'justify'
}}>
    {ReactHTMLParser(coin.description.en.split('. ')[0])}
    </Typography>
  
  

  <div className="marketData" sx={{
    display:{md:'flex'},
    justifyContent:{md:'space-around'}
  }}>
  <span style={{ display: "flex" }}>
            <Typography variant="h5" className='heading'>
              Rank:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {numberWithCommas(coin.market_cap_rank)}
            </Typography>
          </span>
  
          <span style={{ display: "flex" }}>
          <Typography variant="h5" className='heading'>
            Current Price:
          </Typography>
          &nbsp; &nbsp;
          <Typography
            variant="h5"
            style={{
              fontFamily: "Montserrat",
            }}
          >
          {symbol}
          {numberWithCommas(
            coin.market_data.current_price[currency.toLowerCase()]
          )}
          </Typography>
        </span>

        <span style={{ display: "flex" }}>
            <Typography variant="h5" className='heading'>
              Market Cap:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
            {symbol}
              {numberWithCommas(
                coin.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
              M
            </Typography>
          </span>
  </div>
        </div>
        {/**Chart */}
        <CoinInfo coin={coin} />
      </div>
    </React.Fragment>
  );
};

export default Coinpage;
