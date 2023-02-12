import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  console.log(user);
  const onSubmit = async (data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
  };
  const navigate = useNavigate();
  if (user) {
    console.log(user);
    navigate("/");
  }
  return (
    <div>
      <div className="bg-white ">
        <form onSubmit={handleSubmit(onSubmit)}>
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
                {...register("first_name", {
                  required: {
                    value: true,
                    message: "First name is Required",
                  },
                })}
              />
              <input
                type="text"
                placeholder="Last name"
                className="border border-solid  py-3 px-6"
                {...register("last_name", {
                  required: {
                    value: true,
                    message: "Last name is Required",
                  },
                })}
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-solid  py-3 px-6"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <input
                type="email"
                placeholder="Password"
                className="border border-solid  py-3 px-6"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
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
        </form>
      </div>
    </div>
  );
};

export default Register;
