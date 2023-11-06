import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [showPass, setShowPass] = useState(false);
  const { user, signInUser, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  if (user?.email) {
    return navigate("/");
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    const toastId = toast.loading("Logging in...");

    // signIn user
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Logged In Successfully.", { id: toastId });
        form.reset();
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        console.error(error);
        // check for invalid credential
        if (
          error.message === "Firebase: Error (auth/invalid-login-credentials)."
        ) {
          toast.error("Invalid Email or Password", {
            id: toastId,
          });
        }
      });
  };

  // google sign in
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("Logged In Successfully.");
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        console.error(error);
        if (
          error.message ===
          "Firebase: Error (auth/account-exists-with-different-credential)."
        ) {
          toast.error("Account exists with different credential.");
        } else {
          toast.error("Something went wrong!");
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>Flavor Fusion | Login</title>
      </Helmet>
      <section className="flex flex-col lg:flex-row items-center gap-16 md:gap-24 container mx-auto my-20">
        <div className="flex-1">
          <img
            className="outline-dashed outline-1 outline-blue-gray-50 rounded-xl animate-pulse"
            src="https://i.ibb.co/HTCZyzw/login.gif"
            alt=""
          />
        </div>
        <div className="flex-1 w-full outline-dotted outline-1 outline-blue-gray-100 p-6 md:p-16 rounded-xl">
          <h1 className="text-center text-sub-head text-2xl md:text-3xl lg:text-4xl font-semibold mb-12">
            Sign In
          </h1>
          <form onSubmit={handleLogin}>
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
            <p className="mt-5">
              <a
                href="#"
                className="text-sub-head font-semibold hover:text-head"
              >
                Forgot password?
              </a>
            </p>
            <button className="bg-head text-white text-xl font-semibold py-4 w-full rounded-lg my-8">
              <input type="submit" value="Login" />
            </button>
          </form>
          <div>
            <p className="text-center text-sub-head text-lg font-medium">
              Or Sign In with
            </p>
            <div className="flex justify-center items-center mt-8 mb-12">
              <button
                onClick={handleGoogleSignIn}
                className="bg-[#F5F5F8] p-3 rounded-full"
              >
                <FcGoogle></FcGoogle>
              </button>
            </div>
            <p className="text-center text-sub-head text-lg">
              Not registered yet?{" "}
              <Link to="/register" className="text-saffron font-semibold">
                Register
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
