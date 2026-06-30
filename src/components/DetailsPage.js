import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// icons
import { IoChevronBack } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";
// react video player
import ReactPlayer from "react-player";
// components
import Loading from "./Loading";
import { searchApiDetails } from "../services/searchApiDetails";

const DetailsPage = () => {
  const id = useParams().id;
  const [foodDetails, setFoodDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getDetails = async () => {
      try {
        setLoading(true);
        const { data } = await searchApiDetails(`${id}`);
        setFoodDetails(data.meals[0]);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getDetails();
  }, []);

  return (
    <div className="food-container">
      {!loading ? (
        <div className="container">
          <div className="main-info">
            <img src={foodDetails.strMealThumb} alt={foodDetails.idMeal} />

            <p className="food-name">{foodDetails.strMeal}</p>
            <p>
              <span>Category: </span>
              {foodDetails.strCategory}
            </p>
            <p>
              <span>Country: </span>
              {foodDetails.strArea}
            </p>
            <div className="ingredients">
              <span>Ingredients:</span>
              <p>
                {foodDetails.strIngredient1 && (
                  <>
                    {foodDetails.strIngredient1} 👉 {foodDetails.strMeasure1}
                  </>
                )}
              </p>
              <p>
                {foodDetails.strIngredient2 && (
                  <>
                    {foodDetails.strIngredient2} 👉 {foodDetails.strMeasure2}
                  </>
                )}
              </p>
              <p>
                {foodDetails.strIngredient3 && (
                  <>
                    {foodDetails.strIngredient3} 👉 {foodDetails.strMeasure3}
                  </>
                )}
              </p>
              <p>
                {foodDetails.strIngredient4 && (
                  <>
                    {foodDetails.strIngredient4} 👉 {foodDetails.strMeasure4}
                  </>
                )}
              </p>
              <p>
                {foodDetails.strIngredient5 && (
                  <>
                    {foodDetails.strIngredient5} 👉 {foodDetails.strMeasure5}
                  </>
                )}
              </p>
              <p>
                {foodDetails.strIngredient6 && (
                  <>
                    {foodDetails.strIngredient6} 👉 {foodDetails.strMeasure6}
                  </>
                )}
              </p>
              <p>
                {foodDetails.strIngredient7 && (
                  <>
                    {foodDetails.strIngredient7} 👉 {foodDetails.strMeasure7}
                  </>
                )}
              </p>
              <p>
                {foodDetails.strIngredient8 && (
                  <>
                    {foodDetails.strIngredient8} 👉 {foodDetails.strMeasure8}
                  </>
                )}
              </p>
              <p>
                {foodDetails.strIngredient9 && (
                  <>
                    {foodDetails.strIngredient9} 👉 {foodDetails.strMeasure9}
                  </>
                )}
              </p>
              <p>
                {foodDetails.strIngredient10 && (
                  <>
                    {foodDetails.strIngredient10} 👉 {foodDetails.strMeasure10}
                  </>
                )}
              </p>
              <p>
                {foodDetails.strIngredient11 && (
                  <>
                    {foodDetails.strIngredient11} 👉 {foodDetails.strMeasure11}
                  </>
                )}
              </p>
              <p>
                {foodDetails.strIngredient12 && (
                  <>
                    {foodDetails.strIngredient12} 👉 {foodDetails.strMeasure12}
                  </>
                )}
              </p>
              <p>
                {foodDetails.strIngredient13 && (
                  <>
                    {foodDetails.strIngredient13} 👉 {foodDetails.strMeasure13}
                  </>
                )}
              </p>
              <p>
                {foodDetails.strIngredient14 && (
                  <>
                    {foodDetails.strIngredient14} 👉 {foodDetails.strMeasure14}
                  </>
                )}
              </p>
              <p>
                {foodDetails.strIngredient15 && (
                  <>
                    {foodDetails.strIngredient15} 👉 {foodDetails.strMeasure15}
                  </>
                )}
              </p>
              <p>
                {foodDetails.strIngredient16 && (
                  <>
                    {foodDetails.strIngredient16} 👉 {foodDetails.strMeasure16}
                  </>
                )}
              </p>
              <p>
                {foodDetails.strIngredient17 && (
                  <>
                    {foodDetails.strIngredient17} 👉 {foodDetails.strMeasure17}
                  </>
                )}
              </p>
              <p>
                {foodDetails.strIngredient18 && (
                  <>
                    {foodDetails.strIngredient18} 👉 {foodDetails.strMeasure18}
                  </>
                )}
              </p>
              <p>
                {foodDetails.strIngredient19 && (
                  <>
                    {foodDetails.strIngredient19} 👉 {foodDetails.strMeasure19}
                  </>
                )}
              </p>
              <p>
                {foodDetails.strIngredient20 && (
                  <>
                    {foodDetails.strIngredient20} 👉 {foodDetails.strMeasure20}
                  </>
                )}
              </p>
              <Link to="/foods">
                <IoChevronBack /> Back
              </Link>
            </div>
          </div>

          <div className="other-info">
            <div className="instructions">
              <div className="d-flex align-items-center">
                <span className="p-1">
                  <AiOutlineInfoCircle />
                </span>
                <span>Instructions:</span>
              </div>
              <p>{foodDetails.strInstructions}</p>
              {foodDetails.strYoutube && (
                <div className="d-flex justify-content-center">
                  <ReactPlayer
                    url={foodDetails.strYoutube}
                    controls
                    width={480}
                    height={240}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="loading-container">
          <Loading />
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
