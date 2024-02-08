import { useState } from "react";

const MapTracker = () => {
    const [input, setInput] = useState('');
    const [url, setUrl] =useState('https://geo.ipify.org/service/account-balance?apiKey=at_yziwQqxxgNwkeIJWAW8ugR6JfNCam');

    const handleSubmit = (event) => {
        event.preventDefault();
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text"
            value={input}
            onChange={setInput}
            />
        </form>
    </div>
  )
}

export default MapTracker


// Pseudo code
// I need an input state, url state, and address state to render the IP data on the UI
// I also need a useEffect hook to fetch data which is already in the addressbox component. The addressbox is what renders all the data.
// The useEffect should be in the header section because that's where the input is and whenever the user inputs an IP address, the data should render in the addressBox
// The map tracker requires an input to change whenever the user adds an input
// The address box is what's rendering data on the UI 

// MapTracker
// The map tracker is an icon that shifts position based on what the user inputs
// The component should have a form & input element to handle and track changes