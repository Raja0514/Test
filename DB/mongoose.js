const mongoose = require("mongoose");

const mongoURL_DBname = "mongodb://localhost:27017/Databaseone";

const DBconnection = () => {
  mongoose.connect(
    mongoURL_DBname,
    {
      useNewUrlParser: true,
      useUnifiedtopology: true,
    },
    (err) => {
      if (!err) {
        console.log("Database connected");
      } else {
        console.log("Connecting Databse Error");
      }
    }
  );
};
DBconnection();
