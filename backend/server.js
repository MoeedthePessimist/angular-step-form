const express = require("express"),
  path = require("path"),
  cors = require("cors"),
  multer = require("multer"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  infoModel = require("./model.js");
// formidable = require("formidable");
// File upload settings
const PATH = "./uploads";

let filePath;

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, PATH);
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});
let upload = multer({
  storage: storage,
});
// Express settings
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
mongoose
  .connect(`mongodb://localhost:27017/data`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

app.post("/api/info", function (req, res) {
  console.log(req.body.information);
  const data = req.body.information;

  const uploadData = {
    name: data.personal.name,
    email: data.personal.email,
    phone: data.personal.phone,
    address: data.personal.address,
    university: data.education.university,
    degree: data.education.degree,
    major: data.education.major,
    gpa: data.education.gpa,
    filePath: filePath,
  };

  console.log(uploadData);

  const info = new infoModel(uploadData);

  info.save((err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// POST File
app.post("/api/upload", upload.single("file"), function (req, res) {
  if (!req.file) {
    console.log("No file is available!");
    return res.send({
      success: false,
    });
  } else {
    console.log("File is available!");
    console.log(req.file);
    filePath = req.file.path;
    return res.send({
      file: filePath,
      success: true,
    });
  }
});

// Create PORT
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log("Connected to port " + PORT);
});

// Find 404 and hand over to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
