const { URL } = require('url');
const myURL =
  new URL('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');


// 之前版本方法
//   const url = require('url');
//   const myURL =
//     url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');


console.log(myURL)
console.log(myURL.host)
console.log(myURL.toString())

