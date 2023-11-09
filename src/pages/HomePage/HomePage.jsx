import { Helmet } from "react-helmet-async";
import Banner from "../../components/Home/Banner/Banner";
import ChefSpecialties from "../../components/Home/Chef_Special/ChefSpecialties";
import CustomerReview from "../../components/Home/Customer_Review/CustomerReview";
import TopSellingFood from "../../components/Home/TopSellingFood/TopSellingFood";

const HomePage = () => {
  return (
    <section>
      <Helmet>
        <title>Flavor Fusion | Home</title>
      </Helmet>
      <Banner />
      <TopSellingFood />
      <ChefSpecialties />
      <CustomerReview />
    </section>
  );
};

export default HomePage;
