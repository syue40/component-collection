import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { resetPasswordPost } from "../utils/httpClient";

export const ResetPassword = (props) => {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    resetPasswordPost(email)
      .then((res) => {
        setSuccess(true);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div class="mt-5 flex justify-center items-center">
      <div class="bg-white rounded-xl shadow-xl w-1/4 h-fit">
        <div class="">
          <div class="grid bg-black grid-cols-8 pt-3 rounded-t-xl">
            <div class="col-span-1 m-2 cursor-pointer flex justify-end pb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="white"
                class="bi bi-arrow-left"
                viewBox="0 0 16 16"
                onClick={() => navigate(-1)}
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
            </div>
            <div class="col-span-7 flex justify-start mt-1 pb-5 pl-5 pr-5">
              <span class="text-xl text-white">Lost your password?</span>
            </div>
          </div>
          {success ? (
            <div class="mt-5">
              <h2 class="p-5 m-4">
                Email Sent Successfully, Please Check Your Inbox to Reset Your
                Password.
              </h2>
            </div>
          ) : (
            <div class="mt-5 mb-3">
              <p class="mb-3">
                Please enter your email address. If the account exists, you will
                recieve a link to create a new password via email.
              </p>
              <form
                class=""
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit(e);
                }}
              >
                <label class="font-bold m-3" htmlFor="email">Email</label>
                <input class="border rounded-lg m-3" type="email" name="email" value={email} required onChange={(event) => setEmail(event.target.value)}/>
                <div>
                  <button class="bg-red-400 text-white p-5 m-5 rounded-xl font-bold border shadow-lg hover:bg-red-300" type="submit">Send</button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
