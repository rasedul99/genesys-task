import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="bg-white ">
        <div className="flex flex-col gap-12 my-[100px] max-w-2xl mx-auto">
          <div className="flex flex-col gap-4">
            <h3 className="text-center text-[32px]">CREATE ACCOUNT</h3>
            <p className="text-center text-[17px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="flex flex-col gap-6 my-12">
            <input
              type="text"
              placeholder="First name"
              className="border border-solid  py-3 px-6"
            />
            <input
              type="text"
              placeholder="Last name"
              className="border border-solid  py-3 px-6"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-solid  py-3 px-6"
            />
            <input
              type="email"
              placeholder="Password"
              className="border border-solid  py-3 px-6"
            />
          </div>
          <div className="flex flex-col gap-4">
            <input
              type="submit"
              value="CREATE"
              className="bg-[#4E4534] text-white py-3  text-center"
            />
            <div className="">
              <p>
                Already have an account ?
                <span className="border-solid border-black border-b-2 pb-[2px] ml-4">
                  <Link to="/login">Back to Login</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
