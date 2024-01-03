// const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'mydb'
// });

// connection.connect();

// // Sample data to be inserted
// const customersData = [
//   { name: 'Company Inc 1', address: 'Highway 37' },
//   { name: 'Company Inc 2', address: 'Highway 38' },
//   { name: 'Company Inc 3', address: 'Highway 39' },
//   { name: 'Company Inc 4', address: 'Highway 40' },
//   { name: 'Company Inc 5', address: 'Highway 41' },
//   { name: 'Company Inc 6', address: 'Highway 42' },
//   { name: 'Company Inc 7', address: 'Highway 43' },
//   { name: 'Company Inc 8', address: 'Highway 44' },
//   { name: 'Company Inc 9', address: 'Highway 45' },
//   // Add more records similarly...
//   { name: 'Company Inc 10', address: 'Highway 46' }
// ];

// // Constructing a single query to insert multiple records
// const insertQuery = `INSERT INTO customers (name, address) VALUES ?`;

// // Mapping the data into an array of arrays for insertion
// const values = customersData.map(customer => [customer.name, customer.address]);

// // Inserting multiple records in a single query
// connection.query(insertQuery, [values], (err, results) => {
//   if (err) throw err;
//   console.log(`${results.affectedRows} records inserted`);
// });

// connection.end();



var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (name, address) VALUES ?";
  var values = [
    ['John', 'Highway 71'],
    ['Peter', 'Lowstreet 4'],
    ['Amy', 'Apple st 652'],
    ['Hannah', 'Mountain 21'],
    ['Michael', 'Valley 345'],
    ['Sandy', 'Ocean blvd 2'],
    ['Betty', 'Green Grass 1'],
    ['Richard', 'Sky st 331'],
    ['Susan', 'One way 98'],
    ['Vicky', 'Yellow Garden 2'],
    ['Ben', 'Park Lane 38'],
    ['William', 'Central st 954'],
    ['Chuck', 'Main Road 989'],
    ['Viola', 'Sideway 1633']
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});
