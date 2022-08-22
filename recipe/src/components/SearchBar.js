import React, { useEffect, useState } from "react";
// icons
import { GoSearch } from "react-icons/go";
// components
import RecipeCard from "./RecipeCard";
import Loading from "./Loading";
import { searchApi } from "../services/searchApi";

const SearchBar = () => {
  const [foods, setFoods] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  // fetch API
  const getDetails = async () => {
    try {
      setLoading(true);
      const { data } = await searchApi(`${inputValue}`);
      setFoods(data.meals);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDetails();
  }, []);
  // submitHandler
  const submitHandler = async (e) => {
    e.preventDefault();
    getDetails();
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
        <div className="container d-flex flex-wrap justify-content-center col-9 mx-auto my-5">
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
