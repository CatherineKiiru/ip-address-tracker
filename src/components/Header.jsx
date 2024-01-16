// import * as React from 'react';
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Header = () => {
  return (
    <>
      <section className="relative p-24 bg-mobile-image bg-no-repeat bg-cover md:bg-desktop-image h-auto max-w-full ">
        <header className="text-white pt-14 text-center pb-12">
          IP Address Tracker
        </header>

        <Paper
          component="form"
          sx={{ borderRadius: 3 }}
          className="max-w-sm md:max-w-lg flex items-center mx-auto"
        >
          <InputBase
            sx={{ ml: 1, flex: 1, p: 1 }}
            placeholder="Search for any IP address or domain"
            inputProps={{ "aria-label": "Search for any IP address or domain" }}
          />

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
