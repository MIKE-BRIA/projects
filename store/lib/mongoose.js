import mongoose from "mongoose";

// export function mongooseConnect() {
//   if (mongoose.connection.readyState === 1) {
//     return mongoose.connection.asPromise();
//   } else {
//     const uri = process.env.MONGODB_URI;
//     return mongoose.connection(uri);
//   }
// }

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
