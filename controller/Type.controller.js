const data = require('../model/Type.model')

const ImControl = {
    // POST
    POST: async (req, res) => {
        try {
            const newTypro = new data.products_type(req.body)
            const saveTYpro = await newTypro.save()
            res.status(200).json(saveTYpro)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    //GET
    GET: async (req, res) => {
        try {
            const getType = await data.products_type.find()
            res.status(200).json(getType)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    //PUT
    PUT: async ( req, res ) => {
        let PutType = await data.products_type.findById(req.params.id);
        PutType = await data.products_type.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true,
                useFindAndModify: false
            });

            res.status(200).json({
                success: true,
                    PutType
            })
    },

    //Delete
    Del: async ( req, res ) => {
        try {
            const DelType = await data.products_type.findByIdAndDelete(req.params.id)
            console.log({
                respone: 'ລົບຂໍ້ມູນສຳເລັດ',
                status: DelType
            })
            res.status(200).json({
                respone: 'ລົບຂໍ້ມູນສຳເລັດ',
                status: DelType
            })
        } catch (error) {
            res.status(500).json(error)
        }
    },
}

module.exports = ImControl