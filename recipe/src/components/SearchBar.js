import React, { useEffect, useState } from "react";
import axios from "axios";
// icons
import { GoSearch } from "react-icons/go";
// components
import RecipeCard from "./RecipeCard";
import Loading from "./Loading";

const SearchBar = () => {
  const [foods, setFoods] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const BASE_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;

  const loadPost = async () => {
    setLoading(true);
    const response = await axios.get(BASE_URL);
    setFoods(response.data.meals);
    setLoading(false);
  };

  useEffect(() => {
    loadPost();
  }, []);
  //   submitHandler
  const submitHandler = async (e) => {
    e.preventDefault();
    loadPost();
    // clear input
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="searchFood-container">
        <div className="search-section">
          <input
            type="text"
            placeholder="Search for a food..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">
            <GoSearch />
          </button>
        </div>
      </form>
      {loading ? (
        <div className="loading-container">
          <Loading />
        </div>
      ) : (
        <div className="result-section">
          {foods != null ? (
            foods.map((item) => <RecipeCard key={item.idMeal} data={item} />)
          ) : (
            <h1 className="error-txt">Not Found! 😥</h1>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
