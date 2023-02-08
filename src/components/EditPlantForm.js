import React, {useState} from "react"
import PlantCard from "./PlantCard.js"

function EditPlantForm({selectedPlant, plants, setPlants}){
    const [plantFormPrice, setPlantFormPrice] = useState("")
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const updatedPrice = {price: parseInt(plantFormPrice)};
        fetch(`http://localhost:6001/plants/${selectedPlant.id}`,{
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(updatedPrice),
        })
            .then((res) => {
                
                console.log(res)
                setPlants(plants.map(plant => {
                    console.log(plant.id)
                    console.log(selectedPlant.id)
                    if(plant.id === selectedPlant.id){
                        console.log({...plant,price: updatedPrice.price})
                        return {...plant, price: updatedPrice.price}
                    }
                    else{
                        return plant
                    }
                }))
            })
    }

    const handleFormPriceChange = (e) => {
        setPlantFormPrice(e.target.value)
    }
    return(
    <div className="new-plant-form">
        <h2>Original Plant</h2>
        <PlantCard plant={selectedPlant} editForming={false} />
        <form onSubmit={handleFormSubmit}>
            <input type="number" name="price" step="0.01" placeholder="Price"
            onChange={handleFormPriceChange} value={plantFormPrice} />
            <button type="submit" >Update Price</button>
        </form>
    </div>
    );
}

export default EditPlantForm