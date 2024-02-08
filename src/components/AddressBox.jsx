/* eslint-disable no-undef */
import { useEffect, useState } from "react";
// import LoadingMessage from "./loadingMessage";
// import Spinner from "./Spinner";



const AddressBox = () => {
  const [addressData, setAddressData] = useState([]);
  const address = {
    ip: "102.219.210.194",
    location: "Nairobi",
    timezone: "EAT",
    ISP: "Vijiji Connect",
  };
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
  
  const pClasses = 'font-semibold text-2xl'
  const hClasses = 'text-darkGray uppercase font-semibold'

  return (
    <>
      <section className="p-12 absolute mx-auto justify-center items-center right-0 left-0 max-w-sm md:max-w-xl lg:max-w-5xl top-[20rem] bg-white rounded-[1rem] shadow-md">
        {
          <main className="mx-auto gap-4 grid lg:grid-cols-4 lg:divide-x-2 lg:justify-between text-center">
            <div className="">
              <h1 className={hClasses}>IP Address</h1>
              <p className={pClasses}>{address.ip}</p>
            </div>

            <div>
              <h1 className={hClasses}>location</h1>
              <p className={pClasses}>{address.location}</p>
            </div>

            <div>
              <h1 className={hClasses}>Timezone</h1>
              <p className={pClasses}>{address.timezone}</p>
            </div>

            <div>
              <h1 className={hClasses}>ISP</h1>
              <p className={pClasses}>{address.ISP}</p>
            </div>
          </main>
        }
      </section>
    </>
  );
};

export default AddressBox;
