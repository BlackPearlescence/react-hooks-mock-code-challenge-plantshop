import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, setPlants}) {
  const [searchQuery, setSearchQuery] = useState("")
  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants}/>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <PlantList plants={plants} setPlants={setPlants} searchQuery={searchQuery} />
    </main>
  );
}

export default PlantPage;
