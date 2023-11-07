import { Input, Option, Select } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getFoodItems } from "../../api/flavor_fusion";
import FoodItemsCard from "./FoodItemsCard";
import LoadingSpinner from "../LoadingState/LoadingSpinner";
import EmptyState from "../EmptyState/EmptyState";

const AllFoodItems = () => {
  const [category, setCategory] = useState("");
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 9;

  const categories = [
    "All",
    "American",
    "BBQ",
    "Curry",
    "Dessert",
    "Greek",
    "Hungarian",
    "Indian",
    "Italian",
    "Japanese",
    "Korean",
    "Moroccan",
    "Noodles",
    "Pasta",
    "Pizza",
    "Salad",
    "Seafood",
    "Steak",
    "Sushi",
    "Vegetarian",
    "Vietnamese",
  ];

  const { data: foodItems, isLoading } = useQuery({
    queryKey: ["food-items", category, sortField, sortOrder, currentPage],
    queryFn: async () =>
      await getFoodItems(category, sortField, sortOrder, currentPage, limit),
  });
  console.log(foodItems);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center pt-[27%]">
        <LoadingSpinner />
      </div>
    );
  }

  if (foodItems.result.length === 0) {
    return (
      <div className="flex justify-center items-center pt-[20%]">
        <EmptyState />
      </div>
    );
  }

  const totalPage = Math.ceil(foodItems?.totalDataCount / limit);

  const pages = [...Array(totalPage).keys()];

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section className="pt-24 md:pt-28 lg:pt-32 xl:pt-36 space-y-8 md:space-y-12 lg:space-y-14 xl:space-y-16">
      {/* title */}
      <div>
        <h1 className="text-center text-head text-2xl md:text-4xl font-metal font-semibold">
          Get A Glance of Our Food Items
        </h1>
      </div>
      {/* searching & filtering box */}
      <div className="flex flex-wrap justify-evenly gap-5 p-5 xl:p-10 border rounded-lg">
        {/* search */}
        <div className="w-60">
          <Input
            label="Search food item"
            icon={<img src="https://i.ibb.co/qMXcMZt/search-30.png" />}
          />
        </div>
        {/* category */}
        <div className="w-60">
          <Select
            label="Select category"
            onChange={(e) => setCategory(e)}
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
          >
            {categories.map((item) => (
              <Option key={item} value={item}>
                {item}
              </Option>
            ))}
          </Select>
        </div>
        {/* price */}
        <div className="w-60">
          <Select
            label="Select price"
            onChange={(e) => {
              setSortOrder(e), setSortField("price");
            }}
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
          >
            <Option value="asc">From low to high</Option>
            <Option value="desc">From high to low</Option>
          </Select>
        </div>
        {/* quantity */}
        <div className="w-60">
          <Select
            label="Select quantity"
            onChange={(e) => {
              setSortOrder(e), setSortField("quantity");
            }}
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
          >
            <Option value="asc">Available min to max</Option>
            <Option value="desc">Available max to min</Option>
          </Select>
        </div>
      </div>
      {/* food items card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {foodItems?.result.map((item) => (
          <FoodItemsCard key={item._id} food={item} />
        ))}
      </div>
      {/* pagination */}
      <div className="join flex justify-center">
        <div className="border border-head">
          <button onClick={handlePrevPage} className="join-item btn btn-ghost">
            «
          </button>
          {pages?.map((index) => (
            <button
              key={index + 1}
              className={
                currentPage === index + 1
                  ? "join-item btn bg-head"
                  : "join-item btn btn-ghost"
              }
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button onClick={handleNextPage} className="join-item btn btn-ghost">
            »
          </button>
        </div>
      </div>
    </section>
  );
};

export default AllFoodItems;
