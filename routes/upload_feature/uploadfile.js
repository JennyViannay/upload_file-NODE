const express = require("express")
const connection = require('../../config_bdd/config')
const router = express.Router()
const multer = require('multer')

// Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now())
    }
});

const upload = multer({storage: storage})

// Routes
router.post('/', upload.array('file', 12), (req, res, next) => {
    console.log(req.files)
    const files = req.files
    if (!files) {
      const error = new Error('Please choose files')
      error.httpStatusCode = 400
      return next(error)
    }
      res.send(files)
})


module.exports = router