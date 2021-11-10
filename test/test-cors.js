$(document).ready(function () {

  let devUrl =
    "https://ev6zdi25bf.execute-api.us-east-1.amazonaws.com/dev/hello";
  let devKey = "MTh53MhbA5zvIz3oMx1n2ieR8KpRArp80kZZBcs3";

  let prodUrl =
    "https://45c74bytn5.execute-api.us-east-1.amazonaws.com/prod/hello";
  let prodKey = "zABKOwE8qh6NNbwYZi1MF6ZGv9OAAkKN7evDpBM3";

  // Test dev API
  axios({
    method: "GET",
    url: devUrl,
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": devKey,
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log("error: " + error);
    });

  // Test Prod API
  axios({
    method: "GET",
    url: prodUrl,
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": prodKey,
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log("error: " + error);
    });
});
