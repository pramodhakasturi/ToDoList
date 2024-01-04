const express = require('express');

//setting up the router
const router = express.Router();

//importing home controller
const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);
router.post('/create-task', homeController.createTask);
router.post('/delete/', homeController.deleteTask);

//exporting the router
module.exports = router;