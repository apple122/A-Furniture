const data = require('../model/Items.model')
var multer = require('multer');
var path = require('path')

const storage = multer.diskStorage({
    destination: './upload/image',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}-image-${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage
})

const ImControl = {
    // POST
    POST: ( req, res ) => {
        const file = req.files.v2image
        file.mv('./upload/IMG/' + file.name, async function(err, result) {
            try {
                const dataIm = {
                    v1typeId: req.body.v1typeId,
                    v2image: req.files.v2image.name,
                    v2Items: req.body.v2Items,
                    v2size: req.body.v2size,
                    v2sprice: req.body.v2sprice,
                    v2qty: req.body.v2qty
                }
                const saveTYpro = await data.Product_Items.create(dataIm)
                console.log(saveTYpro)
                res.status(200).json(saveTYpro)
            } catch (error) {
                res.status(500).json(error)
            }
        })
    },

    //GET
    GET: async ( req, res ) => {
        try {
            const getType = await data.Product_Items.find().populate("v1typeId")
            res.status(200).json(getType)
        } catch (error) {
            res.status(500).json(error)
        }
    },
   
}

module.exports = ImControl