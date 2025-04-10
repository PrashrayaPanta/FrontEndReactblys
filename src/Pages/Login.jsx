
import { FiMail, FiLock } from "react-icons/fi";

import { useFormik } from "formik";

import * as Yup from "yup";

import YupPassword from "yup-password";

import { toast } from "react-toastify";

YupPassword(Yup);
import { SubmitButton, InputField } from "../components";
import http from "../http";
import { useNavigate } from "react-router-dom";

import PublicNavbar from "../components/PublicNavbar";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .required("Pasword is required")
    .minLowercase(2)
    .minNumbers(2)
    .minSymbols(1),
});

const Login = () => {
 
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
  
      http
        .post("/login", values, {withCredentials:true})
        .then((success) => {
          navigate("/profile");
        })
        .catch((error) => {

          toast.error(error.response.data.message);
          
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  return (
    <>
      <PublicNavbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-lg shadow-xl">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Welcome Back!
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              New here?
              <a
                href="/register"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Create an account
              </a>
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
            <InputField
              formik={formik}
              name="email"
              iconComponent={<FiMail className="h-5 w-5 text-gray-400" />}
            />

            <InputField
              formik={formik}
              name="password"
              iconComponent={<FiLock className="h-5 w-5 text-gray-400" />}
            />
            {/* 
                <input type="checkbox" className="mr-2" onChange={() => setRemember(!remember)} checked={remember}/><label>Remember Me</label> */}

            <SubmitButton formik={formik} label="Log In" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
