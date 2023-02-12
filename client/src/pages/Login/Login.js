import React, { useEffect } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";

const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message}</small>
      </p>
    );
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className="bg-white ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-12 my-28 max-w-2xl mx-auto">
          <h3 className="text-center">LOGIN</h3>
          <div className="flex flex-col gap-6">
            <input
              type="email"
              placeholder="Email"
              className="border border-solid border-[#D2D2D2] p-3"
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
              className="border border-solid border-[#D2D2D2] p-3"
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
          {signInError}
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
      </form>
    </div>
  );
};

export default Login;
