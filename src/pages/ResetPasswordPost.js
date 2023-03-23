import React, { useState } from "react";
import { resetPasswordAfterEmail } from "../utils/httpClient";
import { useParams } from "react-router-dom";

export const ResetPasswordPost = (props) => {
  const [resetSuccess, setResetSuccess] = useState(false);
  const [msg, setMsg] = useState("");
  const resetToken = useParams().jwt;

  const onsubmit = (e) => {
    e.preventDefault();
    let passwords = document.querySelector("#reset-password").value;
    let confirmPassword = document.querySelector(
      "#reset-password-confirm"
    ).value;

    let password = {
      resetValid: true,
      new_password: passwords,
      new_password_confirm: confirmPassword,
      resetToken: resetToken,
    };

    if (passwords !== confirmPassword) {
      setMsg("Password doesn't match.");
      return;
    }
    resetPasswordAfterEmail(password)
      .then((res) => {
        if (res.data.alert) {
          setMsg(res.data.message);
        } else {
          setResetSuccess(true);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex h-screen flex-col items-center">
      <div className="">
        <div className="">
          <div className="">
            <ul>
              <li className="">
                <a className="btn" id="reset-nav">
                  Reset Password
                </a>
              </li>
            </ul>
          </div>
          {resetSuccess ? (
            <>
              <div className="mb-4">
                <h2 className="text-white font-light px-5 mb-3 ml-3">
                  Your password has been successfully reset. You can now login
                  with the new password.
                </h2>
                <div className="grid place-items-center">
                  <a
                    href="http://localhost:3000/"
                    className="loginButtons w-9/12 mt-5 mb-5 text-white font-bold py-2 px-4 rounded-full items-center text-center"
                  >
                    Return Home
                  </a>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="mb-4">
                <h4 className="text-white font-light px-5 mb-3">
                  Password must be 8 characters long, have at least one
                  uppercase character, special character, and number.
                </h4>
              </div>

              <form
                className="form-forgot form-signin form-reset"
                onSubmit={onsubmit}
              >
                <label htmlFor="email">New Password</label>
                <input
                  className="form-styling"
                  id="reset-password"
                  type="password"
                  name="password"
                  placeholder=""
                  required
                />
                <label htmlFor="password">Confirm Password</label>
                <input
                  className="form-styling"
                  id="reset-password-confirm"
                  type="password"
                  name="confirm-password"
                  placeholder=""
                  required
                />
                <div className="grid place-items-center">
                  <button
                    type="submit"
                    className="loginButtons w-9/12 mt-5 mb-5 text-white font-bold py-2 px-4 rounded-full"
                  >
                    Reset Password
                  </button>
                </div>
              </form>

              <div className="m-3">
                <p
                  className="msg items-center text-center mr-5 text-lg"
                  style={{ color: "red" }}
                >
                  {msg}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
