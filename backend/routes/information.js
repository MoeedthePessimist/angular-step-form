const express = require("express");
const multer = require("multer");
const { storeImage, storeInfo } = require("../controllers/information");

const router = express.Router();
// File upload settings
const PATH = "./uploads";

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

//post routes
router.post("/uploadInfo", storeInfo);
router.post("/uploadImage", upload.single("file"), storeImage);

module.exports = router;
