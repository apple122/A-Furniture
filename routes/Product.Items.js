var express = require('express');
const ImControl = require('../controller/Items.controller');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('Display : ImportTYpe');
});

    /**
    * @swagger
    * tags:
    *  name: Pro_Items
    *  description: Pro_Items API
    */
//POST
    /**
     * @swagger
     * /v2/items/add:
     *  post:
     *   summary: POST Pro_Items
     *   tags: [Pro_Items]
     *   description: Create new Pro_Items API.
     *   requestBody:
     *      content:
     *        multipart/form-data:
     *          schema:
     *            type: object
     *            properties:
     *              v1typeId:
     *                type: string
     *              v2image:
     *                type: string
     *                format: binary
     *              v2Items:
     *                type: string
     *              v2size:
     *                type: string
     *              v2sprice:
     *                type: string
     *              v2qty:
     *                type: string
     *   responses:
     *    200:
     *       description: OK
     *    403:
     *       description: Forbiden
     *    401:
     *       description: Unauthorization
     *    404:
     *       description: Not found
     *    500:
     *       description: Some server error
     */
router.post('/items/add', ImControl.POST)

//GET
/**
    * @swagger
    * /v2/items/get:
    *  get:
    *   summary: GET Pro_Items
    *   tags: [Pro_Items]
    *   description: GET Pro_Items API.
    *   responses:
    *    200:
    *       description: OK
    *    403:
    *       description: Forbiden
    *    401:
    *       description: Unauthorization
    *    404:
    *       description: Not found
    *    500:
    *       description: Some server error
    */
router.get('/items/get', ImControl.GET)

module.exports = router;
