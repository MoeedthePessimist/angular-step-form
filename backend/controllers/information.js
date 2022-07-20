const infoModel = require("../models/information");

let filePath;

const storeInfo = function (req, res) {
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
};

const storeImage = function (req, res) {
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
};

module.exports = {
  storeInfo: storeInfo,
  storeImage: storeImage,
};
