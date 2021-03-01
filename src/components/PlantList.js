import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, editPlantPrice, deletePlant }) {
  const plantCards = plants.map(plant => {
    return <PlantCard key={plant.id} deletePlant={deletePlant} editPlantPrice={editPlantPrice} plant={ plant }/>
  })
  return (
    <ul className="cards">{ plantCards }</ul>
  );
}

export default PlantList;
