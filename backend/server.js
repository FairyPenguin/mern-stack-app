//imports
import express from "express";

// express function instance
const app = express();
/*
 route >> get request >> typical request = get request
 like enter url in the address bar
takes 2 params route and a function with 2 params 
(request, response)
*/
app.get("/", (req, res) => {
  //respondin to the get request
  res.send("The " / " Route is Here ");
});

// listen on 8800
app.listen(8800);

console.log("Server is Running weeee");
