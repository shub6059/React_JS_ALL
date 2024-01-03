// import  express, { response }  from "express";
// // var cors = require('cors')
// const app =express();




// app.get("/details",(req,res,next)=>{
// res.json(
// )
//     console.write("hello ")
// })
// app.get('/details', cors(), function (req, res, next) {
//     res.json([
//         {
//             "id": 1,
//             "name": "Alice",
//             "age": 25,
//             "email": "alice@example.com"
//         },
//         {
//             "id": 2,
//             "name": "Bob",
//             "age": 30,
//             "email": "bob@example.com"
//         },
//         {
//             "id": 3,
//             "name": "Charlie",
//             "age": 28,
//             "email": "charlie@example.com"
//         },
//         {
//             "id": 4,
//             "name": "David",
//             "age": 22,
//             "email": "david@example.com"
//         },
//         {
//             "id": 5,
//             "name": "Emma",
//             "age": 27,
//             "email": "emma@example.com"
//         },
//         {
//             "id": 6,
//             "name": "Frank",
//             "age": 35,
//             "email": "frank@example.com"
//         },
//         {
//             "id": 7,
//             "name": "Grace",
//             "age": 29,
//             "email": "grace@example.com"
//         },
//         {
//             "id": 8,
//             "name": "Hannah",
//             "age": 26,
//             "email": "hannah@example.com"
//         },
//         {
//             "id": 9,
//             "name": "Ian",
//             "age": 32,
//             "email": "ian@example.com"
//         },
//         {
//             "id": 10,
//             "name": "Julia",
//             "age": 31,
//             "email": "julia@example.com"
//         },
//         {
//             "id": 11,
//             "name": "Kevin",
//             "age": 24,
//             "email": "kevin@example.com"
//         },
//         {
//             "id": 12,
//             "name": "Linda",
//             "age": 33,
//             "email": "linda@example.com"
//         },
//         {
//             "id": 13,
//             "name": "Mike",
//             "age": 23,
//             "email": "mike@example.com"
//         },
//         {
//             "id": 14,
//             "name": "Nancy",
//             "age": 28,
//             "email": "nancy@example.com"
//         },
//         {
//             "id": 15,
//             "name": "Olivia",
//             "age": 29,
//             "email": "olivia@example.com"
//         },
//         {
//             "id": 16,
//             "name": "Paul",
//             "age": 30,
//             "email": "paul@example.com"
//         },
//         {
//             "id": 17,
//             "name": "Quinn",
//             "age": 27,
//             "email": "quinn@example.com"
//         },
//         {
//             "id": 18,
//             "name": "Rachel",
//             "age": 25,
//             "email": "rachel@example.com"
//         },
//         {
//             "id": 19,
//             "name": "Sam",
//             "age": 26,
//             "email": "sam@example.com"
//         },
//         {
//             "id": 20,
//             "name": "Tom",
//             "age": 34,
//             "email": "tom@example.com"
//         }
//     ])
//   })

// app.listen(3001,()=>{
//     console.log("listning to port 3001")
// }) 


// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send([
//     {
//         "id": 1,
//         "name": "Alice",
//         "age": 25,
//         "email": "alice@example.com"
//     },
//     {
//         "id": 2,
//         "name": "Bob",
//         "age": 30,
//         "email": "bob@example.com"
//     },
//     {
//         "id": 3,
//         "name": "Charlie",
//         "age": 28,
//         "email": "charlie@example.com"
//     },
//     {
//         "id": 4,
//         "name": "David",
//         "age": 22,
//         "email": "david@example.com"
//     },
//     {
//         "id": 5,
//         "name": "Emma",
//         "age": 27,
//         "email": "emma@example.com"
//     },
//     {
//         "id": 6,
//         "name": "Frank",
//         "age": 35,
//         "email": "frank@example.com"
//     },
//     {
//         "id": 7,
//         "name": "Grace",
//         "age": 29,
//         "email": "grace@example.com"
//     },
//     {
//         "id": 8,
//         "name": "Hannah",
//         "age": 26,
//         "email": "hannah@example.com"
//     },
//     {
//         "id": 9,
//         "name": "Ian",
//         "age": 32,
//         "email": "ian@example.com"
//     },
//     {
//         "id": 10,
//         "name": "Julia",
//         "age": 31,
//         "email": "julia@example.com"
//     },
//     {
//         "id": 11,
//         "name": "Kevin",
//         "age": 24,
//         "email": "kevin@example.com"
//     },
//     {
//         "id": 12,
//         "name": "Linda",
//         "age": 33,
//         "email": "linda@example.com"
//     },
//     {
//         "id": 13,
//         "name": "Mike",
//         "age": 23,
//         "email": "mike@example.com"
//     },
//     {
//         "id": 14,
//         "name": "Nancy",
//         "age": 28,
//         "email": "nancy@example.com"
//     },
//     {
//         "id": 15,
//         "name": "Olivia",
//         "age": 29,
//         "email": "olivia@example.com"
//     },
//     {
//         "id": 16,
//         "name": "Paul",
//         "age": 30,
//         "email": "paul@example.com"
//     },
//     {
//         "id": 17,
//         "name": "Quinn",
//         "age": 27,
//         "email": "quinn@example.com"
//     },
//     {
//         "id": 18,
//         "name": "Rachel",
//         "age": 25,
//         "email": "rachel@example.com"
//     },
//     {
//         "id": 19,
//         "name": "Sam",
//         "age": 26,
//         "email": "sam@example.com"
//     },
//     {
//         "id": 20,
//         "name": "Tom",
//         "age": 34,
//         "email": "tom@example.com"
//     }
// ])
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.get('/user', function (req, res, next) {
  res.json([
    {
        "id": 1,
        "name": "Alice",
        "age": 25,
        "email": "alice@example.com"
    },
    {
        "id": 2,
        "name": "Bob",
        "age": 30,
        "email": "bob@example.com"
    },
    {
        "id": 3,
        "name": "Charlie",
        "age": 28,
        "email": "charlie@example.com"
    },
    {
        "id": 4,
        "name": "David",
        "age": 22,
        "email": "david@example.com"
    },
    {
        "id": 5,
        "name": "Emma",
        "age": 27,
        "email": "emma@example.com"
    },
    {
        "id": 6,
        "name": "Frank",
        "age": 35,
        "email": "frank@example.com"
    },
    {
        "id": 7,
        "name": "Grace",
        "age": 29,
        "email": "grace@example.com"
    },
    {
        "id": 8,
        "name": "Hannah",
        "age": 26,
        "email": "hannah@example.com"
    },
    {
        "id": 9,
        "name": "Ian",
        "age": 32,
        "email": "ian@example.com"
    },
    {
        "id": 10,
        "name": "Julia",
        "age": 31,
        "email": "julia@example.com"
    },
    {
        "id": 11,
        "name": "Kevin",
        "age": 24,
        "email": "kevin@example.com"
    },
    {
        "id": 12,
        "name": "Linda",
        "age": 33,
        "email": "linda@example.com"
    },
    {
        "id": 13,
        "name": "Mike",
        "age": 23,
        "email": "mike@example.com"
    },
    {
        "id": 14,
        "name": "Nancy",
        "age": 28,
        "email": "nancy@example.com"
    },
    {
        "id": 15,
        "name": "Olivia",
        "age": 29,
        "email": "olivia@example.com"
    },
    {
        "id": 16,
        "name": "Paul",
        "age": 30,
        "email": "paul@example.com"
    },
    {
        "id": 17,
        "name": "Quinn",
        "age": 27,
        "email": "quinn@example.com"
    },
    {
        "id": 18,
        "name": "Rachel",
        "age": 25,
        "email": "rachel@example.com"
    },
    {
        "id": 19,
        "name": "Sam",
        "age": 26,
        "email": "sam@example.com"
    },
    {
        "id": 20,
        "name": "Tom",
        "age": 34,
        "email": "tom@example.com"
    }
])
})

app.listen(3001, function () {
  console.log('CORS-enabled web server listening on port 3001')
})