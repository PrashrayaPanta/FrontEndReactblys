import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import http from "../http";
import { SubmitButton, InputField } from "../components";

const validationSchema = Yup.object({
  title: Yup.string()
    .required("Title is required")
    .min(3, "Title must be at least 3 characters"),
  description: Yup.string()
    .required("Description is required")
    .min(10, "Description must be at least 10 characters"),
});

const AddTaskForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      http
        .post("/tasks", values, {withCredentials:true}) 
        .then((response) => {
          toast.success("Task created successfully!");
          navigate("/profile"); 
        })
        .catch((error) => {
          toast.error(error.response?.data?.message || "Failed to create task");
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-lg shadow-xl">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Create New Task
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Fill in the details below to create a new task
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
          <InputField
            formik={formik}
            name="title"
            label="Title"
            type="text"
            placeholder="Enter task title"
          />

          <InputField
            formik={formik}
            name="description"
            label="Description"
            type="textarea" // Assuming your InputField supports textarea
            placeholder="Enter task description"
            rows={4}
          />

          <SubmitButton 
            formik={formik} 
            label="Create Task" 
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          />
        </form>
      </div>
    </div>
  );
};

export default AddTaskForm;