import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, setPlants }) {
  const [query, setQuery] = useState('')
  console.log('query: ', query);
  console.log('plants: ', plants);
  
  const filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(query.toLowerCase()))
  console.log('filteredPlants: ', filteredPlants);

  function addNewPlant(newPlant) {
    setPlants([...plants, newPlant])
  }

  function editPlantPrice(newPrice) {
    const newPlantList = plants.map(plant => {
      if (plant.id === newPrice.id) {
        return newPrice
      }
      else {
        return plant
      }
    })
    setPlants(newPlantList)
  }

  function deletePlant(deletedPlant) {
    console.log('deletedPlant: ', deletedPlant);
    const newPlantList = plants.filter( plant => plant.id != deletedPlant.id) 
    console.log('newPlantList: ', newPlantList);
    setPlants(newPlantList)
  }


  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} plants={plants} setPlants={setPlants} />
      <Search query={query} setQuery={setQuery}/>
      <PlantList deletePlant={deletePlant} editPlantPrice={editPlantPrice} plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
