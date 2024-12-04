import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <div className=" mx-auto bg-[#F3F3F3] font-poppins">
      <header className="w-11/12 mx-auto py-10">
        <Navbar></Navbar>
      </header>
      <main className="w-11/12 mx-auto">
        {" "}
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;
