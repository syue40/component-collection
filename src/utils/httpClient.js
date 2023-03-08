import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000/";

async function getApiData(endpoint) {
  return axios
    .get(apiUrl + endpoint, {
      // for accessing protected routes
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

async function loginPost(values, setToken, navigate) {
  let email = values['email']
  let password = values['password']
  return axios
    .post(apiUrl.concat("login"), { email, password })
    .then((res) => {
      if (res.data.account_found) {
        if (res.data.login) {
          setToken(res.data.access_token);
          navigate("/", {
            state: {
              token: res.data.access_token,
              email: res.data.email,
            },
          });
        } else {
          //Wrong Password
          return {
            alert: true,
            msg: "Wrong password",
          };
        }
      } else {
        //Account not found. Need to sign up.
        return {
          alert: true,
          msg: "No account found.",
        };
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

async function signUpPost(data, setToken, navigate) {
  return axios
    .post(apiUrl + "signup", data,)
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

const handleLogout = (navigate, removeToken) => {
  removeToken();
  // document.getElementById("root").style.filter = "blur(0px)";
  navigate("/");
};

export { getApiData, loginPost, signUpPost, handleLogout};
