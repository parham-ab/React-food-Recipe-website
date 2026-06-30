import { useEffect, useState, useCallback } from "react";
import { GoSearch } from "react-icons/go";
import RecipeCard from "./RecipeCard";
import Loading from "./Loading";
import { searchApi } from "../services/searchApi";

const SearchBar = () => {
  const [foods, setFoods] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getDetails = useCallback(async (query) => {
    try {
      setLoading(true);
      setError(false);
      const { data } = await searchApi(query);
      setFoods(data.meals || []);
    } catch (err) {
      console.error(err);
      setError(true);
      setFoods([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getDetails("chicken");
  }, [getDetails]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    getDetails(inputValue.trim());
  };

  return (
    <div className="search-page">
      <form onSubmit={submitHandler} className="searchFood-container">
        <div className="search-section">
          <input
            type="text"
            placeholder="Search for a food..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            aria-label="Search for a food"
          />
          <button type="submit" aria-label="Search">
            <GoSearch />
          </button>
        </div>
      </form>

      {loading ? (
        <div className="loading-container">
          <Loading />
        </div>
      ) : (
        <div className="container result-section d-flex flex-wrap justify-content-center col-11 col-md-9 mx-auto my-5">
          {error ? (
            <h1 className="error-txt">Something went wrong 😥</h1>
          ) : foods && foods.length > 0 ? (
            foods.map((item) => <RecipeCard key={item.idMeal} data={item} />)
          ) : (
            <h1 className="error-txt">No recipes found 😥</h1>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
