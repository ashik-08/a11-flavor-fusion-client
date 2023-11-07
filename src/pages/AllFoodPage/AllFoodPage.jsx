import { Helmet } from "react-helmet-async";
import AllFoodItems from "../../components/AllFood/AllFoodItems";

const AllFoodPage = () => {
  return (
    <section>
      <Helmet>
        <title>Flavor Fusion | All Food Items</title>
      </Helmet>
      <AllFoodItems></AllFoodItems>
    </section>
  );
};

export default AllFoodPage;
