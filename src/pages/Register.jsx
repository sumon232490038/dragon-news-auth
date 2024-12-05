import { Link, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const Navgate = useNavigate();
  const { createNewUser, profileUpdate } = useContext(AuthContext);
  const [errorMsg, setErrorMsg] = useState({});
  const handleFormData = (e) => {
    e.preventDefault();
    setErrorMsg({});

    const form = new FormData(e.target);
    const name = form.get("name");
    if (name.length < 5) {
      setErrorMsg({ ...errorMsg, name: " name Must be 5 char!" });
      return;
    }
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    const profile = {
      displayName: name,
      photoURL: photo,
    };
    // console.log({ name, photo, email, password });
    createNewUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        Navgate("/");
        profileUpdate(profile)
          .then(() => {
            alert("Succsessfully profile updated");
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        // console.log(error);
        setErrorMsg({ ...errorMsg, err: error.code });
      });
  };

  return (
    <div className="pb-10">
      <div className="divide-none"></div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0  mx-auto text-center rounded-none  ">
        <h1 className="mt-10 font-bold text-3xl">Register your account</h1>
        <form onSubmit={handleFormData} className="card-body">
          <div className="divider"></div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text ">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="input input-bordered"
              required
            />
          </div>
          <label className="label text-start text-red-700 capitalize">
            <p>{errorMsg && errorMsg.name}</p>
          </label>
          <div className="form-control ">
            <label className="label">
              <span className="label-text ">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter Your Photo url"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control ">
            <label className="label">
              <span className="label-text ">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
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
              placeholder="Enter Your password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
            {errorMsg.err && (
              <h1 className="text-start text-red-600 capitalize">
                {errorMsg.err}
              </h1>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none ">Register</button>
          </div>
        </form>
        <h1 className="font-bold">
          Already Have An Account ?{" "}
          <Link to="/auth/login" className="text-red-600 ">
            Login
          </Link>{" "}
        </h1>
      </div>
    </div>
  );
};

export default Register;
