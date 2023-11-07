import { Input, Option, Select } from "@material-tailwind/react";
import { useState } from "react";

const AllFoodItems = () => {
  const [category, setCategory] = useState("");
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const categories = [
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

  return (
    <section className="pt-24 md:pt-28 lg:pt-32 xl:pt-36">
      <h1 className="text-center text-head text-2xl md:text-4xl font-metal font-semibold mb-8 md:mb-12 lg:mb-14 xl:mb-16">
        Get A Glance of Our Food Items
      </h1>
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
    </section>
  );
};

export default AllFoodItems;
