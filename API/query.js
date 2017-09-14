const querystring = require('querystring');

const { URL } = require('url');

const testUrl = new URL('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash')
console.log(testUrl)

// console.log(querystring)

//对给定的 str 执行 URL 百分号编码。
let a = querystring.escape('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');
console.log(a)

let b = querystring.unescape(a)
console.log(b)

let c = querystring.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash')
console.log(c)

let cc = querystring.parse(a)   //没有把查询字符串解析出来
console.log(cc)

let ccc = querystring.parse('foo=bar&abc=xyz&abc=123')
let ccc2 = querystring.parse(testUrl.search)
console.log(ccc)
console.log(ccc2)

let d  =querystring.stringify({name:'perfect',age:18})
console.log(d)

