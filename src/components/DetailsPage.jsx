import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";
import ReactPlayer from "react-player";
import Loading from "./Loading";
import { searchApiDetails } from "../services/searchApiDetails";

const DetailsPage = () => {
  const { id } = useParams();
  const [foodDetails, setFoodDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getDetails = async () => {
      try {
        setLoading(true);
        setError(false);
        const { data } = await searchApiDetails(id);
        setFoodDetails(data.meals ? data.meals[0] : null);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getDetails();
  }, [id]);

  const getIngredients = (meal) => {
    if (!meal) return [];
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push({
          id: i,
          name: ingredient,
          measure: measure?.trim() || "",
        });
      }
    }
    return ingredients;
  };

  if (loading) {
    return (
      <div className="loading-container">
        <Loading />
      </div>
    );
  }

  if (error || !foodDetails) {
    return (
      <div className="food-container">
        <div className="container text-center py-5">
          <h1 className="error-txt">Recipe not found 😥</h1>
          <Link to="/foods" className="back-link mt-3 d-inline-flex">
            <IoChevronBack /> Back to recipes
          </Link>
        </div>
      </div>
    );
  }

  const ingredients = getIngredients(foodDetails);

  return (
    <div className="food-container">
      <div className="container">
        <Link to="/foods" className="back-link">
          <IoChevronBack /> Back
        </Link>

        <div className="row g-4 main-info">
          <div className="col-12 col-lg-5">
            <div className="food-img-wrap">
              <img src={foodDetails.strMealThumb} alt={foodDetails.strMeal} />
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <p className="food-name">{foodDetails.strMeal}</p>

            <div className="meta-tags">
              {foodDetails.strCategory && (
                <span className="tag">{foodDetails.strCategory}</span>
              )}
              {foodDetails.strArea && (
                <span className="tag tag-area">{foodDetails.strArea}</span>
              )}
            </div>

            <div className="ingredients">
              <span className="section-label">Ingredients</span>
              <ul className="ingredients-list">
                {ingredients.map((ing) => (
                  <li key={ing.id}>
                    <span className="ing-name">{ing.name}</span>
                    {ing.measure && (
                      <span className="ing-measure">{ing.measure}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="other-info">
          <div className="instructions">
            <div className="section-label d-flex align-items-center gap-2">
              <AiOutlineInfoCircle />
              <span>Instructions</span>
            </div>
            <p className="instructions-text">{foodDetails.strInstructions}</p>

            {foodDetails.strYoutube && (
              <div className="video-wrap">
                <ReactPlayer
                  url={foodDetails.strYoutube}
                  controls
                  width="100%"
                  height="100%"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
