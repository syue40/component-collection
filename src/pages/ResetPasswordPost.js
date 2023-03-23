import React, { useState } from "react";
import { resetPasswordAfterEmail } from "../utils/httpClient";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const ResetPasswordPost = (props) => {
  const [resetSuccess, setResetSuccess] = useState(false);
  const [msg, setMsg] = useState("");
  const resetToken = useParams().jwt;
  const navigate = useNavigate();
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
    <div class="mt-4 flex justify-center items-center">
      <div class="mt-4 bg-white rounded-xl shadow-xl border">
        <h2 class="p-4 text-xl">Reset Password</h2>
        {resetSuccess ? (
          <div class="">
            <div class="mt-4 mb-4 ">
              <h2 class="font-light px-5 mb-3 ml-3">
                Your password has been successfully reset. You can now login
                with the new password.
              </h2>
              <div class="grid place-items-center">
                <button
                  onClick={() => navigate("/")}
                  class="w-9/12 mt-5 mb-5 font-bold py-2 px-4 rounded-full items-center text-center"
                >
                  Return Home
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div class="">
            <div class="mt-4 mb-4 ">
              <h4 class="font-light pl-8 pr-8">
                Password must be 8 characters long, have at least one uppercase
                character, special character, and number.
              </h4>
            </div>

            <form
              class="w-full flex items-center justify-center mt-8 grid grid-rows-1"
              onSubmit={onsubmit}
            >
              <div class="">
                <label htmlFor="email">New Password</label>
                <input
                  class="border-2 rounded ml-8"
                  type="password"
                  name="password"
                  required
                />
              </div>
              <div class="mt-8">
                <label class="" htmlFor="password">Confirm Password</label>
                <input
                  class="border-2 rounded ml-8"
                  type="password"
                  name="confirm-password"
                  required
                />
              </div>

              <div class="place-items-center">
                <button
                  type="submit"
                  class="mt-8 mb-5 bg-red-400 text-white font-bold py-2 px-4 rounded-xl hover:bg-red-300"
                >
                  Reset Password
                </button>
              </div>
            </form>

            <div class="m-3">
              <p
                class="msg items-center text-center mr-5 text-lg"
                style={{ color: "red" }}
              >
                {msg}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
