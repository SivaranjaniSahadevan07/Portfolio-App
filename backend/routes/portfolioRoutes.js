const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');

router.get('/projects', portfolioController.getProjects);
router.post('/projects', portfolioController.addProject); // Should be protected 

router.get('/skills', portfolioController.getSkills);
router.post('/skills', portfolioController.addSkill); // Should be protected

router.post('/contact', portfolioController.sendMessage);

module.exports = router;
