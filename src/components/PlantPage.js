import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import EditPlantForm from "./EditPlantForm.js"
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, setPlants}) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPlant, setSelectedPlant] = useState(null)
  const [showEditForm, setShowEditForm] = useState(false)
  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants}/>
      {showEditForm ? <EditPlantForm 
      selectedPlant={selectedPlant}
      plants={plants}
      setPlants={setPlants}/>:
      null}
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <PlantList 
      plants={plants} 
      setPlants={setPlants} 
      searchQuery={searchQuery} 
      setSelectedPlant={setSelectedPlant}
      setShowEditForm={setShowEditForm}/>
    </main>
  );
}

export default PlantPage;
