import mongoose from "mongoose";

export function mongooseConnect() {
  mongoose.Promise = global.Promise;

  if (!mongoose.connection.readyState) {
    mongoose
      .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .catch((error) => {
        console.error("MongoDB connection error:", error);
      });
  }
}
