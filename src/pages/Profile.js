import React from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import { changePasswordPost, changeUserDetailsPost } from "../utils/httpClient";
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
  const [passwordMessage, setPasswordMessage] = React.useState("")
  const [profileMessage, setProfileMessage] = React.useState("")
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    biography: Yup.string(),
  });

  const validationSchemaPassword = Yup.object({
    oldPassword: Yup.string()
      .required("Old password is required.")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,30})$/,
        "Password must contain at least one upper and lower case letter, number, and special character."
      ),
    newPassword: Yup.string()
      .required("New password is required.")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,30})$/,
        "Password must contain at least one upper and lower case letter, number, and special character."
      ),
    newPasswordVerify: Yup.string().oneOf(
      [Yup.ref("newPassword"), null],
      "Passwords must match"
    ),
  });

  // Define the initial values for the form fields
  const initialValues = {
    firstName: "",
    lastName: "",
    biography: "",
  };

  const initialValuesPassword = {
    oldPassword: "",
    newPassword: "",
    newPasswordVerify: "",
  };

  // Handle form submission and package data in a JSON object
  const handleSubmit = (values) => {
    const userData = {
      firstName: values.firstName,
      lastName: values.lastName,
      biography: values.biography,
    };

    changeUserDetailsPost(userData)
      .then((res) => {
        alert("Update Success");
        if(res.data.alert){
          setProfileMessage("Error updating profile.")
        } else {
          setProfileMessage("Profile successfully changed.")
        }
      })
      .catch((err) => console.log(err));
  };

  const handleChangePassword = (values) => {
    const passwordData = {
      oldPassword: values.oldPassword,
      newPassword: values.newPassword,
      newPasswordVerify: values.newPasswordVerify,
    };

    changePasswordPost(passwordData)
      .then((res) => {
        if(res.data.password_error){
          setPasswordMessage(res.data.password_error);
        } else {
          setPasswordMessage("Password Changed Successfully");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div class="">
      <div class="ml-8 mr-8 pl-5 pr-5 mt-3 mb-8 ">
        <h1 class="flex justify-start font-bold text-2xl ml-5 mt-5 mb-3">
          Update User Profile
        </h1>
        <hr style={{ backgroundColor: "#515152", borderColor: "#515152" }}></hr>
      </div>
      <div class="flex grid grid-cols-2 justify-center items-center ml-8 mr-8">
        <div class="pl-8 pr-8">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form class="p-12 m-5 bg-white rounded-lg shadow-lg">
                <div class="mb-5 ">
                  <span class="flex justify-start ml-2 mb-2">
                    <b>First Name: </b>
                  </span>
                  <div class="">
                    <div>
                      <Field
                        id="firstName"
                        name="firstName"
                        class="border w-full"
                      />
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
                    <Field
                      id="lastName"
                      name="lastName"
                      class="border w-full"
                    />
                    <ErrorMessage name="lastName" />
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
                <div>{profileMessage}</div>
                <div class="flex justify-center row-span-1 mt-10">
                  <button
                    type="submit"
                    class="border h-fit w-fit p-5 rounded-md"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div class="pl-8 pr-8">
          <Formik
            initialValues={initialValuesPassword}
            validationSchema={validationSchemaPassword}
            onSubmit={handleChangePassword}
          >
            {({ errors, touched }) => (
              <Form class="p-12 m-5 bg-white rounded-lg shadow-lg">
                <div class="mb-5">
                  <span class="flex justify-start ml-2 mb-2">
                    <b>Old Password: </b>
                  </span>
                  <div class="">
                    <div>
                      <Field
                        id="oldPassword"
                        name="oldPassword"
                        type="password"
                        class="border w-full"
                      />
                    </div>
                    <div>
                      <ErrorMessage name="oldPassword" />
                    </div>
                  </div>
                </div>
                <div class="mb-5">
                  <span class="flex justify-start ml-2 mb-2">
                    <b>New Password: </b>
                  </span>
                  <div class="">
                    <Field
                      id="newPassword"
                      name="newPassword"
                      type="password"
                      class="border w-full"
                    />
                    <ErrorMessage name="newPassword" />
                  </div>
                </div>
                <div class="mb-5">
                  <span class="flex justify-start ml-2 mb-2">
                    <b>Re-type New Password: </b>
                  </span>
                  <div>
                    <Field
                      id="newPasswordVerify"
                      name="newPasswordVerify"
                      type="password"
                      class="border w-full"
                    />
                    <ErrorMessage name="newPasswordVerify" />
                  </div>
                </div>
                <div>{passwordMessage}</div>
                <div class="flex justify-center row-span-1 mt-10">
                  <button
                    type="submit"
                    class="border h-fit w-fit p-5 rounded-md"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
