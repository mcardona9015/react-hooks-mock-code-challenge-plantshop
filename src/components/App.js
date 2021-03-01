import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
const URL = 'http://localhost:6001/plants'

function App() {
  const [plants, setPlants] = useState(null)

  useEffect(() => {
    fetch(URL)
    .then(response => response.json())
    .then((data) => setPlants(data))
  }, [])


  return (
    <div className="app">
      <Header />
      {plants ? <PlantPage plants={plants} setPlants={setPlants}/> : <h2>Loading...</h2>}
    </div>
  );
}

export default App;
