import mongoose from "mongoose";

const url = `mongodb+srv://BlueJersey:Houda_2022@cluster0.swe5pqd.mongodb.net/?retryWrites=true&w=majority`;

const connectionParams = {};

mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Connected to the Mango");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`);
  });
