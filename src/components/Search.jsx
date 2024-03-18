import { useEffect, useState } from "react";
import style from './search.module.css'

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "c97e7b065397416ab66e02264add66ec";

export default function Search({ setFoodData }) {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={style.searchContainer}>
      <input className={style.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
