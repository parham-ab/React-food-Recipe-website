import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const RecipeCard = ({ data }) => {
  return (
    <Card style={{ width: "18rem" }} className="shadow m-2">
      <Link to={`/foods/${data.idMeal}`}>
        <Card.Img variant="top" src={data.strMealThumb} alt={data.idMeal} />
        <Card.Body>
          <Card.Title style={{ color: "#5c5c5c" }}>{data.strMeal}</Card.Title>
          <Card.Text style={{ color: "gray" }}>
            Category: {data.strCategory}
          </Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default RecipeCard;
