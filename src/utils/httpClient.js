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
        console.log(err)
      });
  }


export {
    getApiData
}