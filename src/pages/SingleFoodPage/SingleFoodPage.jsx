import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { getFoodItemById } from "../../api/flavor_fusion";

const SingleFoodPage = () => {
  const { id } = useParams();

  const { data: foodItem } = useQuery({
    queryKey: ["food-item"],
    queryFn: async () => await getFoodItemById(id),
  });
  console.log(foodItem);

  return (
    <>
      <Helmet>
        <title>Flavor Fusion | {`${foodItem?.food_name}`}</title>
      </Helmet>
      {/* food item */}
      <section className="pt-24 md:pt-28 lg:pt-32 xl:pt-36 space-y-8 md:space-y-12 lg:space-y-14 xl:space-y-16">
        <h1 className="text-center text-head text-2xl md:text-4xl font-metal font-semibold">
          Details of Your Desired Food Item
        </h1>
        <div className="animated-gradient text-sub-head text-base md:text-lg font-semibold px-3 md:px-12 py-12 lg:py-20 rounded-lg flex flex-col lg:flex-row lg:items-center gap-y-12">
          <figure className="max-w-prose ">
            <img
              className="w-full rounded-lg"
              src={foodItem?.food_image}
              alt="food-image"
            />
          </figure>
          <div className="space-y-3 px-10 flex-1">
            <h2 className="text-blue-gray-500 font-bold text-3xl lg:text-4xl mb-8">
              Information
            </h2>
            <p>
              Name:{" "}
              <span className="text-head text-lg md:text-xl">
                {foodItem?.food_name}
              </span>
            </p>
            <p>
              Category:{" "}
              <span className="text-head text-lg md:text-xl">
                {foodItem?.food_category}
              </span>
            </p>
            <p>
              Made By:{" "}
              <span className="text-head text-lg md:text-xl">
                {foodItem?.added_by_name}
              </span>
            </p>
            <p>
              Origin:{" "}
              <span className="text-head text-lg md:text-xl">
                {foodItem?.origin}
              </span>
            </p>
            <p>
              Ingredients:{" "}
              <span className="text-head text-lg md:text-xl">
                {foodItem?.ingredients}
              </span>
            </p>
            <p>
              Price:{" "}
              <span className="text-saffron text-lg md:text-xl">
                ${foodItem?.price}
              </span>
            </p>
            <button className="pt-8">
              <Link to="/order" className="bg-head px-8 py-3.5 rounded-lg">
                Order Now
              </Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleFoodPage;
