/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Kristienne Jewel Mores Student ID: kjmores1 Date: May 20, 2023
*
********************************************************************************/ 

//Step 2: "Hello World"
console.log("Hello World!"); 

//Step 3: Creating the "Server Paths"
// Arrays storing server data
const serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
const serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
const serverResponses = [
  "Welcome to WEB700 Assignment 1",
  "This assignment was prepared by Kristienne Jewel Mores",
  "Kristienne Jewel Mores: kjmores1@myseneca.ca",
  "User Logged In",
  "Main Panel",
  "Logout Complete"
];


// Step 4: Creating the "web server simulator" Function - "httpRequest"
// Function to handle HTTP requests
function httpRequest(httpVerb, path) {
  for (let i = 0; i < serverPaths.length; i++) {
    if (serverVerbs[i] === httpVerb && serverPaths[i] === path) {
      return `200: ${serverResponses[i]}`;
    }
  }

  return `404: Unable to process ${httpVerb} request for ${path}`;
}


// Step 5: Manually Testing the "httpRequest" Function
// Testing the httpRequest function
console.log(httpRequest("GET", "/")); 
console.log(httpRequest("GET", "/about")); 
console.log(httpRequest("GET", "/contact")); 
console.log(httpRequest("POST", "/login")); 
console.log(httpRequest("GET", "/panel")); 
console.log(httpRequest("POST", "/logout")); 
console.log(httpRequest("PUT", "/"));


// Step 6: Automating the Tests by creating an "automateTests" Function
function automateTests() {
    var testVerbs = ["GET", "POST"];
    var testPaths = [
      "/",
      "/about",
      "/contact",
      "/login",
      "/panel",
      "/logout",
      "/randomPath1",
      "/randomPath2"
    ];
  
    function randomRequest() {
      var randVerb = testVerbs[Math.floor(Math.random() * testVerbs.length)];
      var randPath = testPaths[Math.floor(Math.random() * testPaths.length)];
      console.log(httpRequest(randVerb, randPath));
    }
  
    setInterval(randomRequest, 1000);
  }

  // Step 7: Invoke the "automateTests" function
automateTests();