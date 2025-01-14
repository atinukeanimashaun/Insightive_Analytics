import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { useFormik } from "formik";
import * as Yup from "yup";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../contexts/AuthProvider";

const Signin = () => {
  const { createUser, signUpWithGmail } = useContext(AuthContext);
  const navigate = useNavigate(); // Create navigate instance

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      rememberMe: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      username: Yup.string().required("Username is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
    }),
    onSubmit: async (values) => {
      try {
        await createUser(values.email, values.password, values.firstName, values.lastName, values.username);
        alert("Account created successfully!");
        navigate("/"); // Redirect to home page after successful sign-in
      } catch (error) {
        alert(error.message);
      }
    },
  });

  const handleGoogleSignUp = async () => {
    try {
      await signUpWithGmail();
      alert("Google sign-up successful!");
      navigate("/"); // Redirect to home page after successful Google sign-in
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-12">
      {/* Header */}
      <div className="space-y-3 text-center">
        <Link
          to="/"
          className="uppercase text-secondary md:text-[16px] xl:text-xl font-thin cursor-pointer flex flex-col"
        >
          insightive analytics
        </Link>
        <h2 className="font-[700] text-[#0A083A] text-[25px] md:text-[36px] capitalize">
          Register
        </h2>
        <p className="font-[500] text-[18px] text-[#646584] leading-6">
          Start your journey with our product
        </p>
      </div>

      {/* Form */}
      <div className="w-[80%] md:w-[400px] max-w-md mx-3 md:mx-auto my-10">
        <form onSubmit={formik.handleSubmit}>
          <InputField id="firstName" label="First Name*" placeholder="First name" formik={formik} />
          <InputField id="lastName" label="Last Name*" placeholder="Last name" formik={formik} />
          <InputField id="username" label="Username*" placeholder="Username" autoComplete="off" formik={formik} />
          <InputField id="email" label="Email*" placeholder="Email" type="email" autoComplete="off" formik={formik} />
          <InputField id="password" label="Password*" placeholder="********" type="password" formik={formik} />
          <InputField id="confirmPassword" label="Confirm Password*" placeholder="********" type="password" formik={formik} />

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                className="mr-2 rounded-sm"
                {...formik.getFieldProps("rememberMe")}
              />
              <span className="font-[600] text-[12px] text-[#0A083A]">Remember me</span>
            </label>
            <Link to="/forgotpassword" className="font-[600] text-[12px] text-secondary hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-secondary text-white font-semibold rounded-md shadow hover:bg-blue-700 transition capitalize"
          >
            Sign up
          </button>
        </form>

        {/* Sign in with Google */}
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

      {/* Footer */}
      <div className="flex items-center justify-center pb-3">
        <p className="text-[#0A083A] text-[12px] font-[500]">Don’t have an account? </p>
        <Link to="/login" className="text-secondary text-[12px] font-[500] hover:underline">
          Login
        </Link>
      </div>
    </div>
  );
};

const InputField = ({ id, label, type = "text", placeholder, autoComplete, formik }) => (
  <div className="mb-4">
    <label htmlFor={id} className="text-[16px] font-[600] text-[#0A083A]">
      {label}
    </label>
    <input
      id={id}
      name={id}
      type={type}
      autoComplete={autoComplete}
      placeholder={placeholder}
      className={`mt-1 block w-full border ${
        formik.touched[id] && formik.errors[id] ? "border-red-500" : "border-gray-300"
      } rounded-md shadow-sm`}
      {...formik.getFieldProps(id)}
    />
    {formik.touched[id] && formik.errors[id] && (
      <p className="text-red-500 text-sm mt-1">{formik.errors[id]}</p>
    )}
  </div>
);

export default Signin;
