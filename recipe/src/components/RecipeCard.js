import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ data }) => {
  return (
    <div className="card-container">
      <Link to={`/foods/${data.idMeal}`}>
        <img src={data.strMealThumb} alt={data.idMeal} />
        <h2>
          {data.strMeal}
          <div className="category-container">
            <span>Category: {data.strCategory}</span>
          </div>
        </h2>
      </Link>
    </div>
  );
};

export default RecipeCard;
