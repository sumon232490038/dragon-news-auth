import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { signIn, setUser } = useContext(AuthContext);
  const handleLoginForm = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    // console.log({ email, password });
    signIn(email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => console.log(error));
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
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
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
