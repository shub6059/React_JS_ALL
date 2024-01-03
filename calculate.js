// in calculate.js
const data = require("./number");
const os = require("os");
console.log(data);
// Result: [ 1, 2, 3, 4, 5 ]
// Platform
console.log(os.platform());

// CPU Arch
console.log(os.arch());

// CPU Core Info
console.log(os.cpus());

// Free memory
console.log(os.freemem());

// Total memory
console.log(os.totalmem());

// Home dir
console.log(os.homedir());

// Uptime
console.log(os.uptime());
const url = require("url");

const newUrl = new URL(
  "https://mail.google.com/"
);

// Serialized URL
console.log(newUrl.href);
console.log(newUrl.toString());

// Host (root domain)
console.log(newUrl.host);

// Hostname (No port)
console.log(newUrl.hostname);

// Port
console.log(newUrl.port);

// Pathname
console.log(newUrl.pathname);

// Serialized query
console.log(newUrl.search);

// Params object
console.log(newUrl.searchParams);

// Add param
newUrl.searchParams.append("status", "alive");
console.log(newUrl.searchParams);