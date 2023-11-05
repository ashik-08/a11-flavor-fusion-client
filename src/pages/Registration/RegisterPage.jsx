import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const RegisterPage = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <>
      <Helmet>
        <title>Flavor Fusion | Register</title>
      </Helmet>
      <section className="flex flex-col lg:flex-row items-center gap-16 md:gap-24 container mx-auto my-20 lg:my-6">
        <div className="flex-1">
          <img
            className="outline-dashed outline-1 outline-blue-gray-50 rounded-xl animate-pulse"
            src="https://i.ibb.co/khbXyRj/Sign-up.gif"
            alt=""
          />
        </div>
        <div className="flex-1 w-full outline-dotted outline-1 outline-blue-gray-100 p-6 md:p-16 rounded-xl">
          <h1 className="text-center text-sub-head text-2xl md:text-3xl lg:text-4xl font-semibold mb-12">
            Sign Up
          </h1>
          <form
          // onSubmit={handleRegister}
          >
            <span className="space-y-4">
              <p className="text-sub-head text-lg font-semibold">Name</p>
              <input
                className="text-details w-full px-5 py-4 rounded-lg outline outline-1"
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
            </span>
            <span className="space-y-4">
              <p className="text-sub-head text-lg font-semibold mt-8">Email</p>
              <input
                className="text-details w-full px-5 py-4 rounded-lg outline outline-1"
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </span>
            <span className="space-y-4">
              <p className="text-sub-head text-lg font-semibold mt-8">
                Photo URL
              </p>
              <input
                className="text-details w-full px-5 py-4 rounded-lg outline outline-1"
                type="url"
                name="url"
                placeholder="Your Photo URL"
                required
              />
            </span>
            <span className="space-y-4 relative">
              <p className="text-sub-head text-lg font-semibold mt-8">
                Password
              </p>
              <input
                className="text-details w-full px-5 py-4 rounded-lg outline outline-1"
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="Your Password"
                required
              />
              <span
                className="absolute bottom-0 right-3"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
              </span>
            </span>
            <span className="flex gap-3 mt-5">
              <input type="checkbox" name="terms" required />
              <p className="text-sub-head">
                I agree the
                <a
                  href="#"
                  className="text-details font-medium hover:text-head"
                >
                  &nbsp;Terms and Conditions
                </a>
              </p>
            </span>
            <button className="bg-head text-white text-xl font-semibold py-4 w-full rounded-lg my-8">
              <input type="submit" value="Register" />
            </button>
          </form>
          <p className="text-center text-sub-head text-lg">
            Already have an account?{" "}
            <Link to="/login" className="text-saffron font-semibold">
              Login
            </Link>
          </p>
        </div>
        {/* <ToastContainer></ToastContainer> */}
      </section>
    </>
  );
};

export default RegisterPage;
