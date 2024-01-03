// var express = require('express');
// var app = express();
// // for parsing the body in POST request
// var bodyParser = require('body-parser');

// var users =[{
//     id: 1,
//     name: "John Doe",
//     age : 23,
//     email: "john@doe.com"
// }];

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // GET /api/users
// app.get('/api/users', function(req, res){
//     return res.json(users);    
// });


// //  POST /api/users
// //     {
// //         "user" : {
// //            "id": 3,
// //             "name": "Test User",
// //             "age" : 20,
// //             "email": "test@test.com"
// //         }
// //     }
    
// app.post('/api/users', function (req, res) {
//     var user = req.body.user;
//     users.push(user);

//     return res.send('User has been added successfully');
// });

// app.listen('3000', function(){
//     console.log('Server listening on port 3000');
// });

// Create express app
// var express = require("express")
// var app = express()
// var db = require("./database.js")

// // Server port
// var HTTP_PORT = 8000 
// // Start server
// app.listen(HTTP_PORT, () => {
//     console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
// });
// // Root endpoint
// app.get("/", (req, res, next) => {
//     res.json({"message":"Ok"})
// });

// // Insert here other API endpoints

// // Default response for any other request
// app.use(function(req, res){
//     res.status(404);
// });

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});