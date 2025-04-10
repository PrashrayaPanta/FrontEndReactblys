import React, { useEffect } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CiUser } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";

import YupPassword from "yup-password";
import InputField from "../components/InputField";
import SubmitButton from "../components/SubmitButton";


import { toast } from "react-toastify";

import http from "../http";

import PublicNavbar from "../components/PublicNavbar";


YupPassword(Yup);

//! Validation schema
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .required("Pasword is required")

    .minLowercase(2)
    .minNumbers(2)
    .minSymbols(1),
  username: Yup.string().required("Username is required"),
});
const Register = () => {
  // const authToken = FromLocalStorage("userToken");

  // useEffect(() => {
  //   if (authToken) {
  //     navigate("/profile");
  //   }
  // });

  const navigate = useNavigate();
  //!Handle form using formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {

      //   setTimeout(() => setSubmitting(false), 2000);

      http
        .post("/register", values)
        .then((success) => {

          console.log(success);
          


          navigate("/login");

        })

        .catch((error) => {

          
            toast.error(error.response.data.message);
            
          
        })

        .finally(() => setSubmitting(false));
    },
  });

  return (
    <>
      <PublicNavbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-lg shadow-xl">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Create Your Account
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Already have an account?
              <Link
                to="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Sign in
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
            <InputField
              formik={formik}
              label=""
              name="username"
              iconComponent={<CiUser className="h-5 w-5 text-gray-400" />}
            />

            <InputField
              formik={formik}
              label=""
              name="email"
              iconComponent={<FiMail className="h-5 w-5 text-gray-400" />}
            />

            <InputField
              formik={formik}
              label=""
              name="password"
              iconComponent={<FiLock className="h-5 w-5 text-gray-400" />}
            />

            <SubmitButton
              formik={formik}
              label="Register"
              icon="fa fa-user-plus"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
