import React, { useState } from "react";

function PlantCard({plant, plants, setPlants, editForming, setSelectedPlant, setShowEditForm}) {
  const [inStock, setInStock] = useState(true);

  const handleStockButton = (e) => {
    setInStock(!inStock)
  }

  const handlePriceChangeSelectionClick = (e) => {
    setShowEditForm(true)
    setSelectedPlant(plant)
  }

  const handlePlantDelete = (e) => {
    fetch(`http://localhost:6001/plants/${plant.id}`,{
      method: "DELETE",
      headers: {
        "Content-Type" : "application/json"
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
    setPlants(plants.filter(singlePlant => singlePlant !== plant))
  }
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={handleStockButton}>In Stock</button>
      ) : (
        <button onClick={handleStockButton}>Out of Stock</button>
      )}
      {editForming ? 
      <div>
        <button onClick={handlePriceChangeSelectionClick}>Change My Price!</button>
        <button onClick={handlePlantDelete}>Delete Me!</button>
      </div> : null}
    </li>
  );
}

export default PlantCard;
