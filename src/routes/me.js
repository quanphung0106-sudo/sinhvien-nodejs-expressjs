const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/storage/courses', meController.storageMyCourses);
router.get('/trash/courses', meController.myTrashCourses);

module.exports = router;
