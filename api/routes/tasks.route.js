import express from 'express';
import addTask from '../controllers/task.controller.js'

const router = express.Router();

router.post('/task',addTask )
router.get('/task')

export default router;