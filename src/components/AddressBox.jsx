// import { useState } from "react";
import LoadingMessage from "./loadingMessage";
import Spinner from "./Spinner";

const AddressBox = () => {
  const address = {
    ip: "102.219.210.194",
    location: "Nairobi",
    timezone: "EAT",
    ISP: "Vijiji Connect",
  };

  // const [addressDetails, setAddressDetails] = useState(addressObj())
  return (
    <>
      <section className="p-12 absolute mx-auto justify-center right-0 left-0 max-w-sm md:max-w-xl lg:max-w-5xl top-[20rem] bg-white rounded-[1rem] shadow-md">
        {
          <main className="grid md:grid-cols-4 md:divide-x-2 justify-between text-center  py-12">
            <div>
              <div>Address</div>
              <p>{address.ip}</p>
            </div>

            <div>
              <div>location</div>
              <p>{address.location}</p>
            </div>

            <div>
              <div>Timezone</div>
              <p>{address.timezone}</p>
            </div>

            <div>
              <div>ISP</div>
              <p>{address.ISP}</p>
            </div>
          </main>
        }
      </section>
    </>
  );
};

export default AddressBox;

// Define a function or a variable for the map API
// We've defined an address object that takes in the properties we'll assign the values to display
// Define an error function
// The app requires 3 states:
// 1. a state to handle the users input which can either be a url or an IP address
// 2. A state to handle the posiition n latitude and longitude
// 3 .A state that takes in the address details. It can take in an address object
// 4. A state for handling the ipAddress
