import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthProvider";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { getFoodItemById, updateFoodItem } from "../../api/flavor_fusion";

const UpdateFoodPage = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: foodItem } = useQuery({
    queryKey: ["food-item"],
    queryFn: async () => await getFoodItemById(id),
  });
  console.log(foodItem);

  const { mutateAsync } = useMutation({
    mutationKey: ["food-item"],
    mutationFn: updateFoodItem,
  });

  const handleUpdateFood = async (e) => {
    const toastId = toast.loading("Updating Food Item...");
    e.preventDefault();
    const form = e.target;
    const food_name = form.name.value;
    const food_image = form.image.value;
    const food_category = form.category.value;
    const quantity = Number(form.quantity.value);
    const price = Number(form.price.value);
    const origin = form.origin.value;
    const ingredients = form.ingredients.value;

    // Check if the item was added by the currently logged-in user
    if (foodItem?.added_by_email !== user?.email) {
      toast.error("Can't update other owner's item.", { id: toastId });
      return;
    }

    const updatedDetails = {
      id: foodItem?._id,
      food_name,
      food_image,
      food_category,
      quantity,
      price,
      origin,
      ingredients,
    };
    console.log(updatedDetails);

    try {
      const result = await mutateAsync(updatedDetails);
      if (result.modifiedCount > 0) {
        toast.success("Food Item Updated Successfully.", { id: toastId });
        form.reset();
        return navigate("/added-food-items");
      }
      if (result.message === "No data found") {
        toast.error("No data found.", { id: toastId });
      }
      if (result.modifiedCount === 0) {
        toast.error("First make some changes.", { id: toastId });
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
        <title>Flavor Fusion | Update Food Item</title>
      </Helmet>
      <section className="pt-24 md:pt-28 lg:pt-32 xl:pt-36">
        <div className="animated-gradient px-5 md:px-14 lg:px-28 py-20 drop-shadow-sm">
          <h1 className="text-center text-head font-metal font-medium text-4xl lg:text-5xl mb-8">
            Update Existing Food Item
          </h1>
          <p className="text-center text-blue-gray-400 md:text-lg mb-8 px-4 md:px-14">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
          <form
            onSubmit={handleUpdateFood}
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
                defaultValue={foodItem?.food_name}
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
                defaultValue={foodItem?.food_image}
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
                defaultValue={foodItem?.food_category}
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
                defaultValue={foodItem?.quantity}
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
                defaultValue={foodItem?.price}
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
                defaultValue={foodItem?.origin}
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
                defaultValue={foodItem?.ingredients}
              />
            </span>
            <span className="md:col-span-2 mt-6">
              <input
                className="bg-head text-sub-head text-xl font-medium w-full p-3 rounded-md"
                type="submit"
                value="Update Food Item"
              />
            </span>
          </form>
        </div>
      </section>
    </>
  );
};

export default UpdateFoodPage;
