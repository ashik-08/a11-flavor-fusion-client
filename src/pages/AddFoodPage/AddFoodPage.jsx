import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthProvider";
import { useMutation } from "@tanstack/react-query";
import { addFoodItem } from "../../api/flavor_fusion";
import toast from "react-hot-toast";

const AddFoodPage = () => {
  const { user } = useContext(AuthContext);

  const { mutateAsync } = useMutation({
    mutationFn: addFoodItem,
  });

  const handleAddFood = async (e) => {
    e.preventDefault();
    const form = e.target;
    const food_name = form.name.value;
    const food_image = form.image.value;
    const food_category = form.category.value;
    const quantity = Number(form.quantity.value);
    const price = Number(form.price.value);
    const origin = form.origin.value;
    const ingredients = form.ingredients.value;

    const newFoodItem = {
      food_name,
      food_image,
      food_category,
      quantity,
      order: 0,
      price,
      added_by_name: user?.displayName,
      added_by_email: user?.email,
      origin,
      ingredients,
    };
    console.log(newFoodItem);

    const toastId = toast.loading("Adding Food Item...");

    try {
      const result = await mutateAsync(newFoodItem);
      if (result.insertedId) {
        toast.success("Food Item Added Successfully.", { id: toastId });
        form.reset();
      } else if (result.message === "Already exists") {
        toast.error("Item already exists.", { id: toastId });
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while adding this item.", {
        id: toastId,
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Flavor Fusion | Add Food Item</title>
      </Helmet>
      <section className="pt-24 md:pt-28 lg:pt-32 xl:pt-36">
        <div className="animated-gradient px-5 md:px-14 lg:px-28 py-20 drop-shadow-sm">
          <h1 className="text-center text-head font-metal font-medium text-4xl lg:text-5xl mb-8">
            Add New Food Item
          </h1>
          <p className="text-center text-blue-gray-400 md:text-lg mb-8 px-4 md:px-14">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
          <form
            onSubmit={handleAddFood}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <span className="space-y-4">
              <p className="text-sub-head text-lg font-medium">Name</p>
              <input
                className="text-details w-full p-3 rounded-md bg-transparent outline-dotted outline-1 outline-blue-gray-500"
                type="text"
                name="name"
                id=""
                placeholder="Enter food name"
                required
              />
            </span>
            <span className="space-y-4">
              <p className="text-sub-head text-lg font-medium">Image</p>
              <input
                className="text-details w-full p-3 rounded-md bg-transparent outline-dotted outline-1 outline-blue-gray-500"
                type="url"
                name="image"
                id=""
                placeholder="Enter image URL"
                required
              />
            </span>
            <span className="space-y-4">
              <p className="text-sub-head text-lg font-medium">Category</p>
              <input
                className="text-details w-full p-3 rounded-md bg-transparent outline-dotted outline-1 outline-blue-gray-500"
                type="text"
                name="category"
                id=""
                placeholder="Enter food category"
                required
              />
            </span>
            <span className="space-y-4">
              <p className="text-sub-head text-lg font-medium">Quantity</p>
              <input
                className="text-details w-full p-3 rounded-md bg-transparent outline-dotted outline-1 outline-blue-gray-500"
                type="text"
                name="quantity"
                id=""
                placeholder="Enter food quantity"
                required
              />
            </span>
            <span className="space-y-4">
              <p className="text-sub-head text-lg font-medium">Price</p>
              <input
                className="text-details w-full p-3 rounded-md bg-transparent outline-dotted outline-1 outline-blue-gray-500"
                type="text"
                name="price"
                id=""
                placeholder="Enter food price"
                required
              />
            </span>
            <span className="space-y-4">
              <p className="text-sub-head text-lg font-medium">Origin</p>
              <input
                className="text-details w-full p-3 rounded-md bg-transparent outline-dotted outline-1 outline-blue-gray-500"
                type="text"
                name="origin"
                id=""
                placeholder="Enter food origin"
                required
              />
            </span>
            <span className="md:col-span-2 space-y-4">
              <p className="text-sub-head text-lg font-medium">Ingredients</p>
              <input
                className="text-details w-full p-3 rounded-md bg-transparent outline-dotted outline-1 outline-blue-gray-500"
                type="text"
                name="ingredients"
                id=""
                placeholder="Enter food ingredients"
                required
              />
            </span>
            <span className="md:col-span-2 mt-6">
              <input
                className="bg-head text-sub-head text-xl font-medium w-full p-3 rounded-md"
                type="submit"
                value="Add Food Item"
              />
            </span>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddFoodPage;
