import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { signUpPost, loginPost } from "../utils/httpClient"



const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,30})$/,
      "Password must have one upper case, lowercase, and special character."
    )
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
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,30})$/,
      "Password can only contain Latin letters."
    )
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

const LoginForm = (props) => {
  return (
    <div>
      <h1 class="mb-5 mt-3">Login</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            loginPost(values, props.setToken, props.navigate)
            .catch((err) => {
              console.log(err);
            });
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form class="flex grid grid-rows-3 gap-4">
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

const SignupForm = (props) => {
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
            signUpPost(values, props.setToken, props.navigate)
            .catch((err) => {
              console.log(err);
            });
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form class="flex grid grid-rows-4 gap-3">
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

export default function SignInSignUp(props) {
  const navigate = useNavigate();
  return (
    <div class="flex justify-center items-center h-screen">
      <div class="justify-center items-center bg-white rounded-lg shadow-lg border h-fit w-1/4">
        <Tab>
          <div title="Login">
            <LoginForm navigate={navigate} setToken={props.setToken}/>
          </div>
          <div title="Signup">
            <SignupForm navigate={navigate} setToken={props.setToken}/>
          </div>
        </Tab>
      </div>
    </div>
  );
}
