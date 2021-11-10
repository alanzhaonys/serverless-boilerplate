"use strict";

module.exports.hello = function (event, context, callback) {
  //console.log(event); // Contains incoming request data (e.g., query params, headers and more)

  const stage = process.env.STAGE;
  // isLocal will be `undefined` when deployed to Lambda
  const isLocal = process.env.IS_LOCAL;
  const allowedOrigins = ["http://example.com", "http://example2.com"];

  // `origin` will be null if testing from Postman or a standalone HTML page witout backend server
  const origin = event.length ? event.headers.origin : null;

  console.log('Stage: ' + stage);
  console.log('Is local: ' + isLocal);

  if (stage === "dev") {
    // Add your staging origins URLs here
    allowedOrigins.push("http://localhost");
  }

  let headers;

  if (isLocal) {
    // Don't care if running locally for testing
    headers = {};
  } else {
    let matchedOrigin = (origin && allowedOrigins.includes(origin)) ? true : false;

    if (matchedOrigin) {
      headers = {
        "Access-Control-Allow-Origin": origin,
      };
    } else {
      // Browser only allows one origin so return the first
      headers = {
        "Access-Control-Allow-Origin": allowedOrigins[0]
      };
    }
  }

  let body = {
    message: "Hello World",
    origin: origin,
    // For debugging
    event: event,
  };

  callback(null, createResponse(200, headers, body));

  function createResponse(status, headers, body) {
    return {
      headers: headers,
      statusCode: status,
      body: JSON.stringify(body),
    };
  }
};
