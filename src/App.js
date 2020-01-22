import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
export default function App() {
  const [picture, setPicture] = useState([]);

useEffect(() => {
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=Pew9vKHHGa3BB3t2fTEp53WKbC7mGCCOeFRwr57i`)
  .then(response => {
      console.log(response.data)
  })
  .catch(err => {
      console.log('Cannot read data', err);
  });
  
}, []);
return(
null
)
}

