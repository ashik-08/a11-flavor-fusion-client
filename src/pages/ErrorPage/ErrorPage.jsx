import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>Flavor Fusion | Error</title>
      </Helmet>
      <section className="w-full flex flex-col items-center justify-center md:mt-5 2xl:mt-16 p-5">
        <figure className="outline-dashed outline-1 outline-blue-gray-50 drop-shadow-sm">
          <img
            src="https://i.ibb.co/SdFVBZ1/404-error-with-a-landscape.gif"
            alt="errorPage-image"
          />
        </figure>
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-4xl md:text-5xl xl:text-6xl text-sub-head font-metal font-semibold mt-12">
            Page Not Found
          </p>
          <p className="md:text-xl xl:text-2xl text-details font-metal font-medium mt-8">
            Sorry, the page you are looking for could not be found.
          </p>
          <Link
            to="/"
            className="bg-head text-white text-lg xl:text-xl font-metal font-medium px-6 py-2.5 rounded-lg mt-8"
          >
            Go Home
          </Link>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
