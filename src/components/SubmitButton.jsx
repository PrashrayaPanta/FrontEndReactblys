import React from "react";

const SubmitButton = ({ label, formik, icon="fa-arrow-right-to-bracket" }) => {
  return (

      <button
        type="submit"
        disabled={formik.isSubmitting}
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <i
          className={`fa-solid ${
            formik.isSubmitting ? "fa-refresh fa-spin" : icon
          } mt-1 mr-2`}
        ></i>
        {label}
      </button>
 
  );
};

export default SubmitButton;
