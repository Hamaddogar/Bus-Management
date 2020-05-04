var  multer = require('multer')
var path = require('path')


 
var customConfig = multer.diskStorage({
    destination: function (req, file, next) {
        next(null, path.join( __dirname, '../helpers/uploads'))
    },
    filename: function (req, file, next) {
        next(null, Math.random() + '-' + file.originalname)
     
    }
})

var upload = multer({ storage: customConfig })

module.exports = upload;