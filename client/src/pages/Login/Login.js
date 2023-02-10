import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-white ">
      <div className="flex flex-col gap-12 my-28 max-w-2xl mx-auto">
        <h3 className="text-center">LOGIN</h3>
        <div className="flex flex-col gap-6">
          <input
            type="email"
            placeholder="Email"
            className="border border-solid border-[#D2D2D2] p-3"
          />
          <input
            type="email"
            placeholder="Password"
            className="border border-solid border-[#D2D2D2] p-3"
          />
        </div>
        <div className="flex flex-col gap-4">
          <input
            type="submit"
            value="LOGIN"
            className="bg-[#4E4534] text-white p-3 text-center"
          />
          <div className="flex gap-3 justify-center">
            <Link to="/register">
              <p>Create account</p>
            </Link>

            <p>/</p>
            <p>Forgot your password</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
