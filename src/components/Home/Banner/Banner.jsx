import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="pt-24 md:pt-28 lg:pt-32 xl:pt-36">
      <div className="hero min-h-[80vh] bg-hero-bg bg-cover bg-no-repeat rounded-xl">
        <div className="hero-overlay bg-opacity-40 rounded-xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl md:text-5xl font-bold">
              Discover Culinary Delights
            </h1>
            <p className="mb-5">
              Indulge in a world of flavors and savor the finest dishes crafted
              with passion. Explore our diverse menu and treat your taste buds
              to an extraordinary dining experience.
            </p>
            <Link to="/all-food-items" className="btn glass">
              All Items
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
