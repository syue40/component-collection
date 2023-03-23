import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { signUpPost, loginPost } from "../utils/httpClient";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import Typography from "@mui/material/Typography";
import "../styles/SignInSignUp.css";

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
            <div class="p-2 m-3 border rounded-lg" id="loginSignupButton">
              <b>{child.props.tabName}</b>
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
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <div class="mt-5">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            loginPost(values, props.setToken, props.navigate)
              .then((res) => {
                console.log(res)
                if (res.data.alert) {
                  setErrorMessage(res.data.alert);
                }
              })
              .catch((err) => {
                console.log(err);
              });
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div class="flex grid grid-rows-2 gap-4 lg:pl-24 lg:pr-24 md:pl-18 md:pr-18 sm:pl-12 sm:pr-12 xs:pr-8 xs:pl-8 xxs:pr-5 xxs:pl-5">
              <div class="justify-start row-span-1">
                <span class="flex justify-start ml-3 mb-2">
                  <b>Email: </b>
                </span>
                <div class="grid grid-rows-2">
                  <Field
                    type="email"
                    name="email"
                    class="border ml-3 rounded-md p-2"
                  />
                  <ErrorMessage name="email" component="div" />
                </div>
              </div>
              <div class="justify-start row-span-1">
                <span class="flex justify-start ml-3 mb-2">
                  <b>Password: </b>
                </span>
                <div class="grid grid-rows-2">
                  <Field
                    type="password"
                    name="password"
                    class="border ml-3 rounded-md p-2"
                  />
                  <ErrorMessage name="password" component="div" />
                </div>
                <p>{errorMessage}</p>
              </div>
              <div class="flex justify-center row-span-1">
                <button
                  class="border h-fit w-fit p-5 rounded-md"
                  type="submit"
                  disabled={isSubmitting}
                  id="loginSubmitButton"
                >
                  Submit
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const SignupForm = (props) => {
  const [error, setError] = React.useState("");
  return (
    <div class="mt-5">
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            signUpPost(values, props.setToken, props.navigate)
              .then((res) => {
                if (res.alert) {
                  setError(res.msg);
                }
              })
              .catch((err) => {
                console.log(err);
              });
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div class="flex grid grid-rows-3 gap-4 lg:pl-24 lg:pr-24 md:pl-18 md:pr-18 sm:pl-12 sm:pr-12 xs:pr-8 xs:pl-8 xxs:pr-5 xxs:pl-5">
              <div class="justify-start row-span-1">
                <span class="flex justify-start ml-3 mb-2">
                  <b>Email: </b>
                </span>
                <div class="grid grid-rows-2">
                  <Field
                    type="email"
                    name="email"
                    class="border ml-3 rounded-md p-2"
                  />
                  <ErrorMessage name="email" component="div" />
                </div>
              </div>
              <div class="justify-start row-span-1">
                <span class="flex justify-start ml-3 mb-2">
                  <b>Password: </b>
                </span>
                <div class="grid grid-rows-2">
                  <Field
                    type="password"
                    name="password"
                    class="border ml-3 rounded-md p-2"
                  />
                  <ErrorMessage name="password" component="div" />
                </div>
              </div>
              <div class="justify-start row-span-1">
                <span class="flex justify-start ml-3 mb-2 ">
                  <b>Retype Password: </b>
                </span>
                <div class="w-full grid grid-rows-2">
                  <Field
                    type="password"
                    name="passwordConfirmation"
                    class="border ml-3 rounded-md p-2"
                  />
                  <ErrorMessage name="passwordConfirmation" component="div" />
                </div>
              </div>
              <div>{error}</div>
              <div class="flex justify-center row-span-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  class="border h-fit w-fit p-5 rounded-md"
                  id="signUpSubmitButton"
                >
                  Submit
                </button>
              </div>
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
      <div class="justify-center items-center bg-white rounded-lg shadow-lg border h-fit lg:w-1/4 sm:w-1/3 md:w-4/12 xs:w-8/12 xxs:w-10/12 rounded-md">
        <div class="bg-black mb-3 rounded-t-md">
          <div class="flex justify-center pt-3 pb-3">
            <div class="w-fit h-fit flex items-center justify-center">
              <AccountBalanceIcon
                sx={{
                  display: { md: "flex", color: "white" },
                  margin: { sm: "5px", md: "20px" },
                  mr: 1,
                }}
              />
              <Typography
                variant="h6"
                // noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  color: "white",
                  display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
                  flexGrow: 12,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  textDecoration: "none",
                }}
              >
                The Component Library
              </Typography>
            </div>
          </div>
        </div>
        <Tab>
          <div tabName="Login">
            <LoginForm navigate={navigate} setToken={props.setToken} />
          </div>
          <div tabName="Signup">
            <SignupForm navigate={navigate} setToken={props.setToken} />
          </div>
        </Tab>
        <div class="m-8 p-5">
          <NavLink to={"reset-password"}>
            <Typography textAlign="center" class="hover:text-slate-400 text-m">Forgot Password?</Typography>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
