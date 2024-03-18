import { useEffect, useState } from "react";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "c97e7b065397416ab66e02264add66ec";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      setFood(data);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      <div>
        <h1>{food.title}</h1>
        <img src={food.image} alt=""></img>
        <div>
          <span>
            <strong>⌚️ {food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>👨‍👨‍👦 Serves {food.servings}</strong>
          </span>
          <span>{food.vegetarian ? "🥕 Vegetarian" : "🍖 Non-vegetarian"}</span>
          <span>{food.vegan ? "🐮 vegan" : ""}</span>
        </div>
        <div>
          $ <span>{food.pricePerServing / 100} Per serving</span>
        </div>
      </div>
    </div>
  );
}
