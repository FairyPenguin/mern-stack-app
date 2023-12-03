//imports
import express from "express";
import { MongoClient, ServerApiVersion } from "mongodb";

// express function instance
const app = express();

let dataBase;

//MongoDB connection string
const uri = `mongodb+srv://BlueJersey:Houda_2022@cluster0.swe5pqd.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

/*
 route >> get request >> typical request = get request
 like enter url in the address bar
takes 2 params route and a function with 2 params 
(request, response)
*/
app.get("/", async (req, res) => {
  //respondin to the get request
  const allBooks = await dataBase
    .collection("softwareEngineering")
    .find()
    .toArray();

  //   console.log(allBooks);
  res.send(JSON.stringify(allBooks));
  res.send(`<h1>Books List</h1> 
  ${allBooks
    .map((book) => {
      return `<h2>${book.title}</h2> - <span>${book.author}</span>`;
    })
    .join("")}
  
  `);
  //   res.json();
});

console.log("Server is Running weeee");

app.get("/admin", (req, res) => {
  res.send("The admin route");
});

/*
Database connection before the server starts 
so the DB will be ready before any interaction with the 
server
*/

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    dataBase = client.db("books");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();

    app.listen(8800);
    console.log("Hello");
  }
}
run().catch(console.dir);

// async function start() {
//   const client = new MongoClient(uri);
//   await client.connect();
//   console.log("Connected successfuly");
//   dataBase = client.db("Books");
//   // dataBase.collection("Software Engineering ").rename("softwareEngineering");

//   app.listen(8800);
// }

// start();

// listen on 8800
// last line
// app.listen(8800);
