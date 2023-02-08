import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, setPlants, searchQuery}) {
  return (
    <ul className="cards">
      {plants.filter(plant => plant.name.toLowerCase().match(searchQuery.toLowerCase()))
             .map(plant => 
      <PlantCard key={plant.id} plant={plant}/>)}</ul>
  );
}

export default PlantList;
