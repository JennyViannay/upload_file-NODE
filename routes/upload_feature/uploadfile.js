const express = require("express");
const connection = require("../../config_bdd/config");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "public/" });
const fs = require("fs");

// Routes
router.post("/file", upload.array("file"), (req, res, next) => {
  req.files.map(file => {
    fs.rename(file.path, "public/" + file.originalname, err => {
      if (err) {
        return res.send("Problem during travel").status(500);
      } else {
        const objectFile = {
          name : "public/" + file.originalname
        }
        connection.query("INSERT INTO file SET ?", objectFile, err => {
          if (err) {
            return res.send("Error ocurred").status(500);
          }
        })
      }
    })
  })
  return res.send("Files uploaded sucessfully").status(200);
});

module.exports = router;
