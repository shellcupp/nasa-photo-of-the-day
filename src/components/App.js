import React, {useState, useEffect } from "react";
import "./App.css";
import NasaCard from "./NasaCard";
import axios from "axios";

function App() {
  const [img, setImage] = useState([]);

  useEffect(() => {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=Pew9vKHHGa3BB3t2fTEp53WKbC7mGCCOeFRwr57i`)
    .then(response => {
        console.log(response.data);
        setImage(response.data);
    })
    .catch(error => {
      console.log("data was not returned", error);
    });
    
  }, []);
  return (
    <div className="App">
        <NasaCard 
        key={NasaCard}
        image={img.url}
        title={img.title}
        date={img.date}
        Explanation={img.explanation}
        credit={img.copyright}
        />
    </div>
  );
}

export default App;


