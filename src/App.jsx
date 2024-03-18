import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <div className="App">
      <Nav></Nav>
      <Search setFoodData={setFoodData}></Search>
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData}></FoodList>
        </InnerContainer>
        <InnerContainer>
          <FoodDetails></FoodDetails>
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
