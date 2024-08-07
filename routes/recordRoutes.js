const express = require('express');
const router = express.Router();
const recordController = require('../controller/recordController');
const authenticateToken = require('../middleware/userAuth');


router.post('/', authenticateToken, recordController.createRecord);
router.put('/update/:id', authenticateToken, recordController.updateRecord);
router.delete('/delete/:id', authenticateToken, recordController.deleteRecord);
router.get('/get/:id', authenticateToken, recordController.getRecord);
router.get('/getAll', authenticateToken, recordController.getAllRecords);

module.exports = router;