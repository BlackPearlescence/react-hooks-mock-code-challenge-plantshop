import React, { useState } from "react";
import {v4 as uuid4} from "uuid"
function NewPlantForm({plants, setPlants}) {
  const [plantForm, setPlantForm] = useState({
    name: "",
    image: "",
  })

  const [plantFormPrice, setPlantFormPrice] = useState("");

  const handleFormTextChange = (e) => {
    const {name, value} = e.target;
    setPlantForm({...plantForm, [name]: value})
  }
  const handleFormPriceChange= (e) => {
    setPlantFormPrice(parseInt(e.target.value))
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newPlant ={
      name: plantForm.name,
      image: plantForm.image,
      price: plantFormPrice
    }

    fetch("http://localhost:6001/plants",{
      method: "POST",
      headers:{
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(newPlant),
    })

      .then((addedPlant) => {
        console.log("Update Success: ", addedPlant)
        console.log(addedPlant)
        newPlant.id = uuid4()
        setPlants([...plants, newPlant]);
      })
    }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="name" placeholder="Plant name" 
        onChange={handleFormTextChange} value={plantForm.name}/>
        <input type="text" name="image" placeholder="Image URL" 
        onChange={handleFormTextChange} value={plantForm.image}/>
        <input type="number" name="price" step="0.01" placeholder="Price"
        onChange={handleFormPriceChange} value={plantFormPrice} />
        <button type="submit" >Add Plant</button>
      </form>
    </div>
  );
}


export default NewPlantForm;
