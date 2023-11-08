import { Helmet } from "react-helmet-async";
import { getMyAddedFoodItems, removeFoodItem } from "../../api/flavor_fusion";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const MyAddedFoodPage = () => {
  const { user } = useContext(AuthContext);

  const queryClient = useQueryClient();

  const { data: myAddedFoodItems } = useQuery({
    queryKey: ["my-added-food-items"],
    queryFn: async () => await getMyAddedFoodItems(user?.email),
  });
  console.log(myAddedFoodItems);

  const { mutateAsync } = useMutation({
    mutationKey: ["my-added-food-items"],
    mutationFn: removeFoodItem,
    onSuccess: () => queryClient.invalidateQueries(["my-added-food-items"]),
  });

  const TABS = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Recent",
      value: "recent",
    },
    {
      label: "Oldest",
      value: "oldest",
    },
  ];

  const TABLE_HEAD = ["Intro", "Price", "Origin", "Edit", "Delete"];

  const handleFoodDelete = async (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, approve it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const toastId = toast.loading("Deleting Food Item...");
        // delete cart item from database
        try {
          const result = await mutateAsync(id);
          console.log(result);
          if (result.deletedCount > 0) {
            toast.success("Food Item Deleted Successfully.", { id: toastId });
          }
        } catch (error) {
          console.error(error);
          toast.error("An error occurred while adding this item.", {
            id: toastId,
          });
        }
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Flavor Fusion | My Added Foods</title>
      </Helmet>
      {/* TABLE */}
      <section className="pt-24 md:pt-28 lg:pt-32 xl:pt-36">
        {/* TABLE CARD */}
        <Card className="h-full w-full p-4">
          {/* TABLE HEADER */}
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className="mb-8 flex items-center justify-between gap-8">
              <div>
                <Typography variant="h5" color="blue-gray">
                  Food Items List
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  Information about added food items
                </Typography>
              </div>
              <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                <Link to="/all-food-items">
                  <Button variant="outlined" size="md">
                    view all
                  </Button>
                </Link>
                <Link to="/add-food-item">
                  <Button className="flex items-center gap-3" size="md">
                    <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add
                    food
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <Tabs value="all" className="w-full md:w-max">
                <TabsHeader>
                  {TABS.map(({ label, value }, idx) => (
                    <Tab key={idx} value={value}>
                      &nbsp;&nbsp;{label}&nbsp;&nbsp;
                    </Tab>
                  ))}
                </TabsHeader>
              </Tabs>
              <div className="w-full md:w-72">
                <Input
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
              </div>
            </div>
          </CardHeader>
          {/* TABLE BODY */}
          <CardBody className="overflow-scroll px-0">
            <table className="mt-4 w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {myAddedFoodItems?.map(
                  (
                    {
                      _id,
                      food_image,
                      food_name,
                      food_category,
                      price,
                      origin,
                    },
                    index
                  ) => {
                    const isLast = index === myAddedFoodItems?.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={_id}>
                        <td className={classes}>
                          <div className="flex items-center gap-3">
                            <Avatar
                              src={food_image}
                              alt={food_name}
                              size="xxl"
                            />
                            <div className="flex flex-col">
                              <Typography
                                variant="lead"
                                color="blue-gray"
                                className="font-medium"
                              >
                                {food_name}
                              </Typography>
                              <Typography
                                variant="paragraph"
                                color="blue-gray"
                                className="font-normal opacity-70"
                              >
                                {food_category}
                              </Typography>
                            </div>
                          </div>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="paragraph"
                            className="text-saffron font-medium"
                          >
                            ${price}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="bg-head w-fit px-4 py-2 bg-opacity-80 rounded-md font-medium "
                          >
                            {origin}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Tooltip content="Edit Item">
                            <IconButton variant="text">
                              <PencilIcon className="h-4 w-4" />
                            </IconButton>
                          </Tooltip>
                        </td>
                        <td
                          className={classes}
                          onClick={() => handleFoodDelete(_id)}
                        >
                          <Tooltip content="Delete Item">
                            <IconButton variant="text">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </IconButton>
                          </Tooltip>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
          {/* TABLE FOOTER */}
          <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              Page 1 of 1
            </Typography>
            <div className="flex gap-2">
              <Button variant="outlined" size="sm">
                Previous
              </Button>
              <Button variant="outlined" size="sm">
                Next
              </Button>
            </div>
          </CardFooter>
        </Card>
      </section>
    </>
  );
};

export default MyAddedFoodPage;
