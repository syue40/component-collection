import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

const MyTextArea = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea className="text-area" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export const Profile = (props) => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    address: Yup.string().required("Address is required"),
    biography: Yup.string(),
  });

  // Define the initial values for the form fields
  const initialValues = {
    firstName: "",
    lastName: "",
    address: "",
    biography: "",
  };

  // Handle form submission and package data in a JSON object
  const handleSubmit = (values) => {
    const userData = {
      firstName: values.firstName,
      lastName: values.lastName,
      address: values.address,
      biography: values.biography,
    };

    console.log(JSON.stringify(userData));
  };
  return (
    <div class="">
      <div class="ml-8 mr-8 pl-5 pr-5 mt-3 mb-8">
        <h1 class="flex justify-start font-bold text-2xl ml-5 mt-5 mb-3">
          Update User Profile
        </h1>
        <hr style={{ backgroundColor: "#515152", borderColor: "#515152" }}></hr>
      </div>
      <div class="flex justify-center items-center">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form class="p-12 m-5 bg-white rounded-lg shadow-lg lg:w-1/4 md:w-1/3 sm:w-1/2 xs:w-2/3">
              <div class="mb-5 ">
                <span class="flex justify-start ml-2 mb-2">
                  <b>First Name: </b>
                </span>
                <div class="">
                  <div>
                    <Field id="firstName" name="firstName" class="border w-full" />
                  </div>
                  <div>
                    <ErrorMessage name="firstName" />
                  </div>
                </div>
              </div>
              <div class="mb-5">
                <span class="flex justify-start ml-2 mb-2">
                  <b>Last Name: </b>
                </span>
                <div class="">
                  <Field id="lastName" name="lastName" class="border w-full" />
                  <ErrorMessage name="lastName" />
                </div>
              </div>
              <div class="mb-5">
                <span class="flex justify-start ml-2 mb-2">
                  <b>Address: </b>
                </span>
                <div class="">
                  <Field id="address" name="address" class="border w-full" />
                  <ErrorMessage name="address" />
                </div>
              </div>
              <div>
                <span class="flex justify-start ml-2 mb-2">
                  <b>Short Biography: </b>
                </span>
                <div class="">
                  <MyTextArea
                    name="biography"
                    rows="4"
                    class="border w-full"
                    // placeholder="Once upon a time there was a princess who lived at the top of a glass hill."
                  />
                  <ErrorMessage name="biography" />
                </div>
              </div>
              <div class="flex justify-center row-span-1 mt-10">
                <button
                  type="submit"
                  //   disabled={isSubmitting}
                  class="border h-fit w-fit p-5 rounded-md"
                  id="signUpSubmitButton"
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
