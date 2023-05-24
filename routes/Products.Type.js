var express = require('express');
const ImControl = require('../controller/Type.controller');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send('Display : Products_TYPE');
});

/**
    * @swagger
    * tags:
    *  name: Products_type
    *  description: Products_type API
    */
//POST
/**
 * @swagger
 * /v1/pro_type/add:
 *  post:
 *   summary: POST Products_type
 *   tags: [Products_type]
 *   description: Create new Products_type API.
 *   requestBody:
 *      content:
 *        multipart/form-data:
 *          schema:
 *            type: object
 *            properties:
 *              pro_type:
 *                type: string
 *              pro_status:
 *                type: string
 *              pro_curdate:
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
router.post('/pro_type/add', ImControl.POST)

//GET
/**
    * @swagger
    * /v1/pro_type/get:
    *  get:
    *   summary: GET Products_type
    *   tags: [Products_type]
    *   description: GET Products_type API.
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
router.get('/pro_type/get', ImControl.GET)

//PUT
/**
 * @swagger
 * /v1/pro_type/put/{id}:
 *  put:
 *   summary: Put Update Products_type
 *   tags: [Products_type]
 *   description: update Products_type by id.
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *      type: string
 *      required: true
 *      description: IMP_ID
 *   requestBody:
 *      content:
 *        multipart/form-data:
 *          schema:
 *            type: object
 *            properties:
 *              pro_type:
 *                type: string
 *              pro_status:
 *                type: string
 *              pro_curdate:
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
router.put('/pro_type/put/:id', ImControl.PUT)

//Delete
/**
 * @swagger
 * /v1/pro_type/del/{id}:
 *  delete:
 *   summary: Delete Products_type
 *   tags: [Products_type]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: string
 *      required: true
 *      description: SL_ID
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
router.delete('/pro_type/del/:id', ImControl.Del)

module.exports = router;