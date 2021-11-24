const express = require('express');
const router = express.Router();

const lopsController = require('../app/controllers/LopsController');

router.get('/create', lopsController.create);
router.post('/store', lopsController.store);
router.get('/:id/edit', lopsController.edit);
router.get('/find-id', lopsController.findById);
router.put('/:id', lopsController.update);
router.patch('/:id/restore', lopsController.restore);
router.delete('/:id', lopsController.destroy);
router.delete('/:id/force', lopsController.forceDestroy);
module.exports = router;