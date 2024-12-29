import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import PasswordIcon from "../assets/icon/PasswordIcon";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../contexts/AuthProvider";

const ForgotPassword = () => {
  const { doPasswordReset, signUpWithGmail } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: async (values) => {
      try {
        await doPasswordReset(values.email); // Use AuthContext method
        alert("Password reset email sent! Check your inbox.");
      } catch (error) {
        alert(error.message);
      }
    },
  });

  const handleGoogleSignUp = async () => {
    try {
      await signUpWithGmail(); // Use AuthContext method
      alert("Google sign-up successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-20">
      {/* Header */}
      <div className="space-y-3 text-center">
        <button className="bg-secondary p-4 rounded-lg">
          <PasswordIcon />
        </button>
        <Link
          to="/"
          className="uppercase text-secondary md:text-[16px] xl:text-xl font-thin cursor-pointer flex flex-col"
        >
          insightive analytics
        </Link>
        <h2 className="font-[700] text-[#0A083A] text-[25px] md:text-[36px] capitalize">
          Reset Password
        </h2>
        <p className="font-[500] text-[18px] text-[#646584] leading-6">
          Start your journey with our product
        </p>
      </div>

      {/* Form */}
      <div className="w-[80%] md:w-[400px] max-w-md mx-3 md:mx-auto my-10">
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="text-[16px] font-[600] text-[#0A083A]"
            >
              Username & email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="off"
              placeholder="email & username"
              className={`mt-1 block w-full border ${
                formik.errors.email && formik.touched.email
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md shadow-sm`}
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-secondary text-white font-semibold rounded-md shadow transition"
          >
            Reset Password
          </button>
        </form>

        {/* Google Sign-In */}
        <div className="mt-4">
          <button
            onClick={handleGoogleSignUp}
            className="w-full py-2 px-4 bg-white text-[#0A083A] text-[16px] font-[500] rounded-md shadow flex items-center justify-center border border-gray-300 hover:bg-gray-100 transition"
          >
            <FcGoogle className="text-xl mr-2" />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
