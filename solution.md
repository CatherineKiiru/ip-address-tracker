# Problem

We need to create an IP Address tracker that fetches data from an API and renders IP Address, location & ISP on the UI

## Solution Structure

- We'd need to create seperate components for the Address, the map and the tracker.

- Each component has a title attached to the data being rendered on the UI

- The main event is when the user inputs an address or domain and clicks the search button

- On click, the search should render and display the daya according to each component's layout

## Layout

### Address Component

- This is the component that fetches the data and renders it on the UI. This component needs to have three states: the loading state, the rendered address, and an error state

- From the design & research, the address component will take in an object with 4 properties:

1. The IP address prop
2. location prop
3. Timezone prop
4. ISP prop

### App component

This will hold the functionality for rendering the API data.

## Test Case 1

Pass in props in the address function and call them in the return statement. This does not use TypeScript

