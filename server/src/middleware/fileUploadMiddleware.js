// ----------------------------------------------------Imports-----------------------------------------
const multer = require("multer");
const { googleStorage } = require("../configs/multerGoogleConfig");
// ----------------------------------------------------------------------------------------------------

googleUploadMiddleware = multer({
  storage: googleStorage,
  limits: {
    fileSize: 500000000,
  },
});

module.exports = googleUploadMiddleware;
