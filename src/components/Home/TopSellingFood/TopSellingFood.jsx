import { useQuery } from "@tanstack/react-query";
import { getTopSellingFoods } from "../../../api/flavor_fusion";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../LoadingState/LoadingSpinner";

const TopSellingFood = () => {
  const { data: topFoodItems, isLoading } = useQuery({
    queryKey: ["top-food-items"],
    queryFn: async () => await getTopSellingFoods(),
  });
  console.log(topFoodItems);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (topFoodItems.length === 0) {
    return;
  }

  return (
    <section className="mt-24 md:mt-32 lg:mt-36 xl:mt-40">
      <h1 className="text-center text-head text-2xl md:text-4xl font-metal font-semibold mb-8 md:mb-12 lg:mb-14 xl:mb-16">
        Our Top Foods
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topFoodItems &&
          topFoodItems?.map((top) => {
            return (
              <div
                key={top._id}
                className="animated-gradient p-5 space-y-5 card-effect"
              >
                <figure className="border-4 border-saffron rounded-lg">
                  <img
                    className="rounded-md"
                    src={top.food_image}
                    alt="food-image"
                  />
                </figure>
                <div className="space-y-2 px-3 xl:text-lg font-medium">
                  <p className="text-sub-head">
                    Name:{" "}
                    <span className="text-saffron text-lg xl:text-xl">
                      {top.food_name}
                    </span>
                  </p>
                  <p className="text-sub-head">
                    Category:{" "}
                    <span className="text-saffron text-lg xl:text-xl">
                      {top.food_category}
                    </span>
                  </p>
                  <div className="flex justify-between">
                    <p className="text-sub-head">
                      Price:{" "}
                      <span className="text-saffron text-lg xl:text-xl">
                        ${top.price}
                      </span>
                    </p>
                    <p className="text-sub-head">
                      Quantity:{" "}
                      <span className="text-saffron text-lg xl:text-xl">
                        {top.quantity}
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-center pt-5 pb-2">
                    <Link
                      to={`/food-item/${top._id}`}
                      className="bg-saffron px-10 py-2 rounded-lg"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default TopSellingFood;
