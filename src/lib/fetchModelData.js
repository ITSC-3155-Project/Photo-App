// /**
//  * FetchModel - Fetch a model from the web server.
//  * 
//  * @param {string} url - The URL to issue the GET request.
//  * 
//  * @returns {Promise} A Promise that should be filled with the response 
//  * of the GET request parsed as a JSON object and returned in the property
//  * named "data" of an object.
//  * 
//  * If the request has an error, the promise should be rejected with an 
//  * object containing the properties:
//  *   status: The HTTP response status
//  *   statusText: The statusText from the xhr request
//  */
// function FetchModel(url) {
//   return new Promise((resolve, reject) => {
//     // Create a new XMLHttpRequest object
//     const xhr = new XMLHttpRequest();
    
//     // Configure it: GET-request for the URL
//     xhr.open('GET', url, true);
    
//     // Set up the callback for when the request completes
//     xhr.onload = function() {
//       if (xhr.status >= 200 && xhr.status < 300) {
//         // Success! Parse the JSON response
//         try {
//           const response = JSON.parse(xhr.responseText);
//           // Resolve with data wrapped in an object with 'data' property
//           resolve({ data: response });
//         } catch (error) {
//           // JSON parsing error
//           reject({
//             status: xhr.status,
//             statusText: 'JSON Parse Error: ' + error.message
//           });
//         }
//       } else {
//         // HTTP error status
//         reject({
//           status: xhr.status,
//           statusText: xhr.statusText
//         });
//       }
//     };
    
//     // Set up the callback for network errors
//     xhr.onerror = function() {
//       reject({
//         status: xhr.status,
//         statusText: 'Network Error'
//       });
//     };
    
//     // Set up the callback for request timeout
//     xhr.ontimeout = function() {
//       reject({
//         status: xhr.status,
//         statusText: 'Request Timeout'
//       });
//     };
    
//     // Send the request
//     xhr.send();
//   });
// }

// export default FetchModel;






/**
 * FetchModel - Fetch a model from the web server.
 * 
 * @param {string} url - The URL to issue the GET request.
 * 
 * @returns {Promise} A Promise that should be filled with the response 
 * of the GET request parsed as a JSON object and returned in the property
 * named "data" of an object.
 * 
 * If the request has an error, the promise should be rejected with an 
 * object containing the properties:
 *   status: The HTTP response status
 *   statusText: The statusText from the xhr request
 */
function FetchModel(url) {
  return new Promise((resolve, reject) => {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    
    // Configure it: GET-request for the URL
    xhr.open('GET', url, true);
    
    // Set up the callback for when the request completes
    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 300) {
        // Success! Parse the JSON response
        try {
          const response = JSON.parse(xhr.responseText);
          // Resolve with data wrapped in an object with 'data' property
          resolve({ data: response });
        } catch (error) {
          // JSON parsing error
          reject({
            status: xhr.status,
            statusText: 'JSON Parse Error: ' + error.message
          });
        }
      } else {
        // HTTP error status
        reject({
          status: xhr.status,
          statusText: xhr.statusText
        });
      }
    };
    
    // Set up the callback for network errors
    xhr.onerror = function() {
      reject({
        status: xhr.status,
        statusText: 'Network Error'
      });
    };
    
    // Set up the callback for request timeout
    xhr.ontimeout = function() {
      reject({
        status: xhr.status,
        statusText: 'Request Timeout'
      });
    };
    
    // Send the request
    xhr.send();
  });
}

export default FetchModel;