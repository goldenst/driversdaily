const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

// connect database
connectDB();

// init middleware
app.use(express.json({ extended: false }));

//app.get("/", (req, res) => res.json({ msg: "Welcome to Driver log App" }));

// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/calls", require("./routes/calls"));
app.use("/api/daily", require("./routes/daily"));

// serve static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server has Started on port: ${PORT}`));
