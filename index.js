const http = require("http");
const url = require("url");

///////////////////////////////////////
///////////////File

//*****************Blocking, synchronous way */
//read and write file by the "fs";
const fs = require("fs");
// const textIN = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIN);
// const textOut = `This is what we know the advocado:${textIN}.\n Created on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File Written!");

///************************None-blocking, Asynchronous way
//sychronous means one after one do the work. it's also called blocking;
//Asynchronous is not blocking  */

// fs.readFile('./txt/start.txt','utf-8',(err,data)=>{
//     console.log(data);
// });
// console.log('will read file!!!');

// fs.readFile('./txt/start.txt','utf-8',(err,data)=>{
//     fs.readFile(`./txt/${data}.txt`,'utf-8',(err,data2)=>{
//         console.log(data2);
//         fs.readFile('./txt/append.txt','utf-8',(err,data3)=>{
//             console.log(data3);
//             fs.writeFile('./txt/final.txt',`${data2}\n${data3}`,'utf-8',err=>{
//                 console.log('Your file has been writen😎');
//             })
//         })
//     })
// })
// console.log('will read file!');

////////////////////////////////////
///////////////SERVER
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const productData = JSON.parse(data);
const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("Hello from overview");
  } else if (pathName === "/product") {
    res.end("This is product page");
  } else if (pathName === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-owner-header": "hello-world",
    });
    res.end("<h1>Page not Found</h1>");
  }

  //   console.log(req.url);
});
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000");
});
