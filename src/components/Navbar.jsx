import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="flex  justify-between items-center">
      <div className=" flex-1 ">{user && user.email}</div>
      <div className="nav flex-1 text-center space-x-5 ">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="flex-1">
        <div className="login flex gap-2 justify-end  items-center">
          <div className=" ">
            {user ? (
              <div className="flex  items-center justify-center">
                <img
                  className="w-12 h-12 rounded-full "
                  src={user.photoURL}
                  alt=""
                />
                <p className="">{user.displayName}</p>
              </div>
            ) : (
              <img src={userIcon} alt="" />
            )}
          </div>
          {user && user?.email ? (
            <>
              <button onClick={logOut} className="btn btn-neutral rounded-none">
                Log Out
              </button>
            </>
          ) : (
            <Link to="/auth/login" className="btn btn-neutral rounded-none">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
