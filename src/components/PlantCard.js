
import React, { useState } from "react";

function PlantCard({ plant, editPlantPrice, deletePlant }) {
  const { name, price, image } = plant
  const [inStock, setInStock] = useState(true)
  const [priceChange, setPriceChange] = useState(false)
  const [newPrice, setNewPrice] = useState(price)
  


  function handleButtonClick(){
    setInStock((inStock) => !inStock)
  }

  function HandleEditPriceButton(){
    setPriceChange((priceChange) => !priceChange)
  }

  function changePrice(e) {
    setNewPrice((newPrice) => e.target.value)
  }

  function handlePriceChange(e) {
    e.preventDefault()
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({price: newPrice})
    })
    .then(response => response.json())
    .then(editPlantPrice)
    setPriceChange((priceChange) => !priceChange)
  }

  function handleDeleteClick(){
    deletePlant(plant)
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json'}
    })
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price} <button onClick={HandleEditPriceButton}>Edit</button></p>
      {priceChange ? 
      <p>New Price: 
        <form onSubmit={handlePriceChange}>
          <input onChange={changePrice} value={newPrice}/>
          <button type="submit">Edit Price</button>
        </form>
      </p> : null}
      
      {inStock ? (
        <button onClick={handleButtonClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleButtonClick} >Out of Stock</button>
      )}

      <button onClick={handleDeleteClick} style={{backgroundColor: "red"}}>Delete</button>
    </li>
  );
}

export default PlantCard;
