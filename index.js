//***Blocking, synchronous way */
//read and write file by the "fs";
const fs = require("fs");
// const textIN = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIN);
// const textOut = `This is what we know the advocado:${textIN}.\n Created on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File Written!");

///****None-blocking, Asynchronous way
//sychronous means one after one do the work. it's also called blocking;
//Asynchronous is not blocking  */

// fs.readFile('./txt/start.txt','utf-8',(err,data)=>{
//     console.log(data);
// });
// console.log('will read file!!!');




