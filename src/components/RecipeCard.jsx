import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const RecipeCard = ({ data }) => {
  return (
    <Card className="recipe-card shadow-sm m-2">
      <Link to={`/foods/${data.idMeal}`} className="recipe-card-link">
        <div className="recipe-card-img-wrap">
          <Card.Img
            variant="top"
            src={data.strMealThumb}
            alt={data.strMeal}
            loading="lazy"
          />
        </div>
        <Card.Body>
          <Card.Title className="recipe-card-title">{data.strMeal}</Card.Title>
          {data.strCategory && (
            <span className="recipe-card-badge">{data.strCategory}</span>
          )}
        </Card.Body>
      </Link>
    </Card>
  );
};

export default RecipeCard;
