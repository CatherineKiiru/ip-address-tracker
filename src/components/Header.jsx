/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Header = () => {
  const [addressData, setAddressData] = useState([]);
  const [input, setInput] = useState('');
  const url = "https://geo.ipify.org/api/v2/"
  const API_KEY = "at_yziwQqxxgNwkeIJWAW8ugR6JfNCam"
  
  const fetchData = async () => {
    const response = await fetch (url, {
      headers: {
        method: POST,
        API_KEY,
      }
    }) 
    const addressData = response.json()
    
    console.log(addressData)   
    setAddressData(addressData)
  }

  useEffect(() => {
    fetchData
  }, [addressData])

  return (
    <>
      <section className="relative p-24 bg-mobile-image bg-no-repeat bg-cover md:bg-desktop-image h-auto">
        <h1 className="text-white p-12 text-center ">
          IP Address Tracker
        </h1>

        
        <Paper
          
          elevation={6}
          sx={{ borderRadius: 3 }}
          className="max-w-sm md:max-w-lg flex mx-auto"
        >
          <input className="w-full rounded-xl px-4"
          type="text" 
          placeholder="Search for any IP address or domain"
          />
          {/* <InputBase
            sx={{ ml: 2, flex: 1 }}
            placeholder="Search for any IP address or domain"
            type=""
            value={input}
            onChange={setInput}
          /> */}

          <div className="bg-veryDarkGray rounded-r-xl">
            <IconButton sx={{ p: 1.5 }} aria-label="directions">
              <ArrowForwardIosIcon className="text-white scale-75" />
            </IconButton>
          </div>
        </Paper>
        
      </section>
      
    </>
  );
};

export default Header;
