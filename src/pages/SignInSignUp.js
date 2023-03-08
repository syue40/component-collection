import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
});

const Tab = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div class="mb-5">
      <div className="tab-buttons grid grid-cols-2">
        {React.Children.map(children, (child, index) => (
          <button
            className={`tab-button ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            <div class="p-1 m-3 border rounded-lg hover:">
              {child.props.title}
            </div>
          </button>
        ))}
      </div>
      <div className="tab-content">
        {React.Children.toArray(children)[activeTab]}
      </div>
    </div>
  );
};

const LoginForm = () => {
  return (
    <div>
      <h1 class="mb-5 mt-3">Login</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form class="flex grid grid-rows-3 gap-4">
            <div class="justify-start row-span-1 ml-24 mr-24">
              <span class="flex justify-start ml-3 mb-2">Username: </span>
              <div class="grid grid-rows-2">
                <Field type="email" name="email" class="border ml-3" />
                <ErrorMessage name="email" component="div" />
              </div>
            </div>
            <div class="justify-start row-span-1 ml-24 mr-24">
              <span class="flex justify-start ml-3 mb-2">Password: </span>
              <div class="grid grid-rows-2">
                <Field type="password" name="password" class="border ml-3" />
                <ErrorMessage name="password" component="div" />
              </div>
            </div>
            <div class="flex justify-center row-span-1 ml-8">
              <button
                class="border h-fit w-fit p-5"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const SignupForm = () => {
  return (
    <div class="">
      <div class="mb-5 mt-3">
        <h1>Sign up</h1>
      </div>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form class="flex grid grid-rows-5 gap-3">
            <div class="justify-start row-span-1 ml-24 mr-24">
              <span class="flex justify-start ml-3 mb-2">Username: </span>
              <div class="grid grid-rows-2">
                <Field type="text" name="username" class="border ml-3" />
                <ErrorMessage name="username" component="div" />
              </div>
            </div>
            <div class="justify-start row-span-1 ml-24 mr-24">
              <span class="flex justify-start ml-3 mb-2">Email: </span>
              <div class="grid grid-rows-2">
                <Field type="email" name="email" class="border ml-3" />
                <ErrorMessage name="email" component="div" />
              </div>
            </div>
            <div class="justify-start row-span-1 ml-24 mr-24">
              <span class="flex justify-start ml-3 mb-2">Password: </span>
              <div class="grid grid-rows-2">
                <Field type="password" name="password" class="border ml-3" />
                <ErrorMessage name="password" component="div" />
              </div>
            </div>
            <div class="justify-start row-span-1 ml-24 mr-24">
              <span class="flex justify-start ml-3 mb-2">
                Retype Password:{" "}
              </span>
              <div class="grid grid-rows-2">
                <Field
                  type="password"
                  name="passwordConfirmation"
                  class="border ml-3"
                />
                <ErrorMessage name="passwordConfirmation" component="div" />
              </div>
            </div>
            <div class="flex justify-center row-span-1 ml-8">
              <button
                type="submit"
                disabled={isSubmitting}
                class="border h-fit w-fit p-5"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default function SignInSignUp() {
  return (
    <div class="flex justify-center items-center h-screen">
      <div class="justify-center items-center bg-white rounded-lg shadow-lg border h-fit w-1/4">
        <Tab>
          <div title="Login">
            <LoginForm />
          </div>
          <div title="Signup">
            <SignupForm />
          </div>
        </Tab>
      </div>
    </div>
  );
}
