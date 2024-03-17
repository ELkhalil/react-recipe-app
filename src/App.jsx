import { useState } from "react";
import Search from "./components/Search";

function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <div className="App">
      <Search setFoodData={setFoodData}></Search>
      {
        foodData.map((data) => <h1>{data.title}</h1>)
      }
    </div>
  );
}

export default App;
