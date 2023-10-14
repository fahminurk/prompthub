import mongoose from "mongoose";

let isConnecting = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnecting) {
    console.log("MongoDB is connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnecting = true;
    console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
  }
};
