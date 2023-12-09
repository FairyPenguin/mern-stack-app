//imports
import express from "express";
import { MongoClient, ServerApiVersion } from "mongodb";
import cors from "cors";
import multer from "multer";
import sanitizeHTML from "sanitize-html";

// express function instance
const app = express();

//cors

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "./views");

const upload = multer();
let dataBase;

//MongoDB connection string
const uri = process.env.MONGO_URL;
// console.log(process.env.DB_URL);

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

  res.render("home", { allBooks });
  //   console.log(allBooks);
  // res.send(JSON.stringify(allBooks));
  //   res.json();
});

console.log("Server is Running weeee");

app.get("/admin", (req, res) => {
  res.send("The admin route");
});

app.get("/api/books", async (req, res) => {
  const allBooks = await dataBase
    .collection("softwareEngineering")
    .find()
    .toArray();
  res.json(allBooks);
});

app.post("/api/books", upload.single("cover-image"), (req, res) => {
  // const values = [
  //   req.body.title,
  //   req.body.author,
  //   req.body.subtitle,
  //   req.body.description,
  //   req.body.coverImage,
  //   req.body.publicationDate,
  // ];

  const readValues = req.body;
  console.log(readValues);

  // return res.json("added.....check");
  return res.json(readValues);
});

//middleware cleanup function
function cleanupHandler(req, res, next) {
  if (req.body.name != "string") {
    req.body.name === "";
  }
  if (req.body.name != "string") {
    req.body.name === "";
  }
  if (req.body.name != "string") {
    req.body.name === "";
  }
}

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

    client.db("books").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    dataBase = client.db("books");
  } finally {
    await dataBase;
    // .collection("softwareEngineering")
    // .updateMany({}, { $rename: { "Publication date": "publicationDate" } });
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
