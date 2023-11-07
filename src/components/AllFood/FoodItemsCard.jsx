import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FoodItemsCard = ({ food }) => {
  const { _id, food_name, food_image, food_category, quantity, price } = food;
  return (
    <div className="animated-gradient p-5 space-y-5 card-effect">
      <figure className="border-4 border-saffron rounded-lg">
        <img className="rounded-md" src={food_image} alt="food-image" />
      </figure>
      <div className="space-y-2 px-3 xl:text-lg font-medium">
        <p className="text-sub-head">
          Name:{" "}
          <span className="text-saffron text-lg xl:text-xl">{food_name}</span>
        </p>
        <p className="text-sub-head">
          Category:{" "}
          <span className="text-saffron text-lg xl:text-xl">
            {food_category}
          </span>
        </p>
        <div className="flex justify-between">
          <p className="text-sub-head">
            Price:{" "}
            <span className="text-saffron text-lg xl:text-xl">${price}</span>
          </p>
          <p className="text-sub-head">
            Quantity:{" "}
            <span className="text-saffron text-lg xl:text-xl">{quantity}</span>
          </p>
        </div>
        <div className="flex justify-center pt-5 pb-2">
          <Link
            to={`/food-item/${_id}`}
            className="bg-saffron px-10 py-2 rounded-lg"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

FoodItemsCard.propTypes = {
  food: PropTypes.object,
};

export default FoodItemsCard;
