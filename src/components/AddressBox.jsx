/* eslint-disable no-undef */
import { useEffect, useState } from "react";
// import LoadingMessage from "./loadingMessage";
// import Spinner from "./Spinner";

// const address = {
//   ip: "102.219.210.194",
//   location: "Nairobi",
//   timezone: "EAT",
//   ISP: "Vijiji Connect",
// };

const AddressBox = () => {
  const [addressData, setAddressData] = useState([]);
  const url = "https://geo.ipify.org/api/v2/"
  const API_KEY = "at_yziwQqxxgNwkeIJWAW8ugR6JfNCam"
  
  const fetchData = async () => {
    const response = await fetch (url, {
      headers: {
        method: POST,
        API_KEY,
      }
    }) 
    const data = response.json()
    
    console.log(data) 
    setAddressData(data)
  }

  useEffect(() => {
    fetchData
  }, [])

  
  
  const pClasses = 'font-semibold text-2xl'
  const hClasses = 'text-darkGray uppercase font-semibold'

  return (
    <>
      <section className="p-12 absolute mx-auto justify-center items-center right-0 left-0 max-w-sm md:max-w-xl lg:max-w-5xl top-[20rem] bg-white rounded-[1rem] shadow-md">
        {
          <main className="mx-auto gap-4 grid md:grid-cols-4 md:divide-x-2 md:justify-between text-center">
            <div className="">
              <h1 className={hClasses}>IP Address</h1>
              <p className={pClasses}>{addressData.ip}</p>
            </div>

            <div>
              <h1 className={hClasses}>location</h1>
              <p className={pClasses}>{addressData.location}</p>
            </div>

            <div>
              <h1 className={hClasses}>Timezone</h1>
              <p className={pClasses}>{addressData.timezone}</p>
            </div>

            <div>
              <h1 className={hClasses}>ISP</h1>
              <p className={pClasses}>{addressData.ISP}</p>
            </div>
          </main>
        }
      </section>
    </>
  );
};

export default AddressBox;

// Pseudo code refresher
// We've defined the addressbox function
// this function is what will contain the url and api key
// the url and api key contains the data we want to fetch from ipify
// we're fetching the data with the async await method
// We're also using the useEffect hook to 
