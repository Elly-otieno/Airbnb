import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data"

function App() {
  const dataElements = data.map((item)=>{
    return(
      <Card 
        key ={item.id}
        {...item}
      />
    )
  })
  return (
    <div className="main">
      <Navbar />
      <Hero />
      <div className="card-element">
        {dataElements}
      </div>
    </div>
  );
}

export default App;
