const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/storage/lops', meController.storageMyLops);
router.get('/trash/lops', meController.myTrashLops);

module.exports = router;
