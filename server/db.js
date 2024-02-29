"user strict";
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

// Connect to MongoDB Atlas
mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (!error) {
      console.log(
        "🔥 Database has been connected Successfully to",
        process.env.MONGO_URI
      );
    } else {
      console.log(`🤢 Database Connection Error: ${error}`);
    }
  }
);

module.exports = mongoose.connection;
