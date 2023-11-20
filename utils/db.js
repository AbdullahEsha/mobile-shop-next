import mongoose from "mongoose";

const connection = {};

const dbConnect = async () => {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;
  console.log("MONGODB_URI", process.env.MONGODB_URL);
};

const dbDisconnect = async () => {
  if (connection.isConnected) {
    await mongoose.disconnect();
    connection.isConnected = false;
  }
};

export { dbConnect, dbDisconnect };

// Compare this snippet from pages/api/products/index.js:

// import nc from "next-connect";
// import Product from "@/models/Product";
// import db from "@/utils/db";
