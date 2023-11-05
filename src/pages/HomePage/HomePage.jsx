import Banner from "../../components/Home/Banner/Banner";
import ChefSpecialties from "../../components/Home/Chef_Special/ChefSpecialties";
import CustomerReview from "../../components/Home/Customer_Review/CustomerReview";

const HomePage = () => {
  return (
    <section>
      <Banner></Banner>
      <ChefSpecialties></ChefSpecialties>
      <CustomerReview></CustomerReview>
    </section>
  );
};

export default HomePage;
