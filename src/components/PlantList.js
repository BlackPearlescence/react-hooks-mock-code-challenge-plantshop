import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, setPlants, searchQuery, setSelectedPlant, setShowEditForm}) {
  return (
    <ul className="cards">
      {plants.filter(plant => plant.name.toLowerCase().match(searchQuery.toLowerCase()))
             .map(plant => 
      <PlantCard 
      key={plant.id} 
      plant={plant} 
      plants={plants}
      setPlants={setPlants}
      editForming={true} 
      setSelectedPlant={setSelectedPlant}
      setShowEditForm={setShowEditForm}/>)}</ul>
  );
}

export default PlantList;
