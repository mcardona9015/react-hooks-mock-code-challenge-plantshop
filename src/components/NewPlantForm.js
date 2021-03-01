import React, { useState } from "react";

function NewPlantForm({ plants, setPlants, addNewPlant }) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')

  function handleNewPlant(e){
    e.preventDefault()
    const newPlant = {name, price: parseInt(price), image}
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
    .then(response => response.json())
    .then(addNewPlant)
  }
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleNewPlant} >
        <input onChange={(e) => setName(e.target.value)} value={name} type="text" name="name" placeholder="Plant name" />
        <input onChange={(e) => setImage(e.target.value)} value={image} type="text" name="image" placeholder="Image URL" />
        <input onChange={(e) => setPrice(e.target.value)} value={price} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
