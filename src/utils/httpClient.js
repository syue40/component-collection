import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000";

async function getApiData(endpoint) {
  return axios
    .get(apiUrl + "/profile", {
      // for accessing protected routes
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

async function loginPost(values, setToken, navigate) {
  let email = values["email"];
  let password = values["password"];
  return axios
    .post(apiUrl + "/login", { email, password })
    .then((res) => {
      if (res.data.account_found && res.data.login) {
          setToken(res.data.access_token);
          navigate("/", {
            state: {
              token: res.data.access_token,
              email: res.data.email,
            },
          });
      } else {
        // Return the error
        return res;
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

async function signUpPost(data, setToken, navigate) {
  return axios
    .post(apiUrl + "/signup", data)
    .then((res) => {
      if (res.data.user_added === true) {
        setToken(res.data.access_token);
        navigate("/", { token: res.data.access_token });
      } else {
        return {
          alert: true,
          msg: res.data.error,
        };
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

async function changeUserDetailsPost(details) {
  return axios
    .post(apiUrl + "/update-profile", details, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => res)
    .catch((err) => {
      console.log(err);
    });
}

async function resetPasswordPost(email) {
  return axios
    .post(apiUrl + "/reset-password", { email })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
}

async function resetPasswordAfterEmail(password) {
  return axios
    .post(apiUrl + "/reset-password-post", { password })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

export {
  getApiData,
  loginPost,
  signUpPost,
  changeUserDetailsPost,
  resetPasswordPost,
  resetPasswordAfterEmail
};
