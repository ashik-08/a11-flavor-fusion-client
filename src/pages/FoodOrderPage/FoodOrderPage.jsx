import { useMutation, useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";
import { getFoodItemById, orderFoodItem } from "../../api/flavor_fusion";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import moment from "moment";
import toast from "react-hot-toast";

const FoodOrderPage = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [orderPrice, setOrderPrice] = useState();
  const date = moment().format("ddd, DD MMM YYYY HH:mm:ss [GMT]");
  const navigate = useNavigate();

  const { data: foodItem } = useQuery({
    queryKey: ["food-item"],
    queryFn: async () => await getFoodItemById(id),
  });
  console.log(foodItem);

  const { mutateAsync } = useMutation({
    mutationFn: orderFoodItem,
  });

  const handleFoodOrder = async (e) => {
    e.preventDefault();
    const form = e.target;
    const food_name = form.food_name.value;
    const price = Number(form.price.value);
    const quantity = Number(form.quantity.value);
    const buying_date = form.date.value;
    const buyer_name = form.buyer_name.value;
    const buyer_email = form.buyer_email.value;

    const newFoodOrder = {
      food_id: foodItem?._id,
      food_image: foodItem?.food_image,
      food_name,
      food_category: foodItem?.food_category,
      ordered: quantity,
      total_cost: price,
      food_owner_name: foodItem?.added_by_name,
      food_owner_email: foodItem?.added_by_email,
      buying_date,
      buyer_name,
      buyer_email,
      origin: foodItem?.origin,
      ingredients: foodItem?.ingredients,
    };
    console.log(newFoodOrder);

    const toastId = toast.loading("Placing Food Order...");

    try {
      const result = await mutateAsync(newFoodOrder);
      console.log(result);

      if (
        result?.orderResult?.insertedId &&
        result?.updateResult?.modifiedCount > 0
      ) {
        toast.success("Food Order Placed Successfully.", { id: toastId });
        form.reset();
        return navigate("/all-food-items");
      }
      if (result.message === "Own food item") {
        toast.error("Can't order own added food item.", { id: toastId });
      }
      if (result.message === "Item is not available") {
        toast.error("Can't order! Food item is not available.", {
          id: toastId,
        });
      }
      if (result.message === "Less item available") {
        toast.error("Can't order more than available item.", { id: toastId });
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while placing order.", {
        id: toastId,
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Flavor Fusion | Food Order</title>
      </Helmet>
      {/* food ordering form */}
      <section className="pt-24 md:pt-28 lg:pt-32 xl:pt-36">
        <div className="animated-gradient px-5 md:px-14 lg:px-28 py-20 drop-shadow-sm">
          <h1 className="text-center text-head font-metal font-medium text-4xl lg:text-5xl mb-8">
            Order the Food Item
          </h1>
          <p className="text-center text-blue-gray-400 md:text-lg mb-8 px-4 md:px-14">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
          <form
            onSubmit={handleFoodOrder}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <span className="space-y-4">
              <p className="text-sub-head text-lg font-medium">Food Name</p>
              <input
                className="text-details w-full p-3 rounded-md bg-transparent outline-dotted outline-1 outline-blue-gray-500"
                type="text"
                name="food_name"
                id=""
                placeholder="Enter food name"
                required
                defaultValue={foodItem?.food_name}
                disabled
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
                defaultValue={orderPrice}
                disabled
              />
            </span>
            <span className="space-y-4">
              <p className="text-sub-head text-lg font-medium">Quantity</p>
              <input
                className="text-details w-full p-3 rounded-md bg-transparent outline-dotted outline-1 outline-blue-gray-500"
                type="number"
                name="quantity"
                id=""
                placeholder={`Enter food quantity (Remaining: ${foodItem?.quantity})`}
                required
                onChange={(e) =>
                  setOrderPrice(Number(e.target.value * foodItem?.price).toFixed(2))
                }
              />
            </span>
            <span className="space-y-4">
              <p className="text-sub-head text-lg font-medium">Buying Date</p>
              <input
                className="text-details w-full p-3 rounded-md bg-transparent outline-dotted outline-1 outline-blue-gray-500"
                type="text"
                name="date"
                id=""
                placeholder="Enter date"
                required
                defaultValue={date}
                disabled
              />
            </span>
            <span className="space-y-4">
              <p className="text-sub-head text-lg font-medium">Buyer Name</p>
              <input
                className="text-details w-full p-3 rounded-md bg-transparent outline-dotted outline-1 outline-blue-gray-500"
                type="text"
                name="buyer_name"
                id=""
                placeholder="Enter buyer name"
                required
                defaultValue={user?.displayName}
                disabled
              />
            </span>
            <span className="space-y-4">
              <p className="text-sub-head text-lg font-medium">Buyer Email</p>
              <input
                className="text-details w-full p-3 rounded-md bg-transparent outline-dotted outline-1 outline-blue-gray-500"
                type="email"
                name="buyer_email"
                id=""
                placeholder="Enter buyer email"
                required
                defaultValue={user?.email}
                disabled
              />
            </span>
            <span className="md:col-span-2 mt-6">
              <input
                className="bg-head text-sub-head text-xl font-medium w-full p-3 rounded-md"
                type="submit"
                value="Place Order"
              />
            </span>
          </form>
        </div>
      </section>
    </>
  );
};

export default FoodOrderPage;
