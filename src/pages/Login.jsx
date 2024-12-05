import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { signIn, setUser } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const location = useLocation();
  console.log(location);

  const Navigate = useNavigate();
  const handleLoginForm = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    // console.log({ email, password });
    signIn(email, password)
      .then((result) => {
        setUser(result.user);
        e.target.reset();
        Navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setLoginError(error.code);
      });
  };
  return (
    <div className="pb-10">
      <div className="divide-none"></div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0  mx-auto text-center rounded-none  ">
        <h1 className="mt-10 font-bold text-3xl">Login your account</h1>
        <form onSubmit={handleLoginForm} className="card-body">
          <div className="divider"></div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text ">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label text-start">
              <p className="text-red-800 text-start capitalize ">
                {loginError}
              </p>
            </label>
          </div>
          <div className="form-control mt-6">
            <button to className="btn btn-neutral rounded-none">
              Login
            </button>
          </div>
        </form>
        <h1 className="font-bold">
          Dont’t Have An Account ?{" "}
          <Link to="/auth/register" className="text-red-600 ">
            Register
          </Link>{" "}
        </h1>
      </div>
    </div>
  );
};

export default Login;
