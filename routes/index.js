import { Router } from 'express';
import { getHome } from '../controllers/indexController.js';

const router = Router();

// Main route
router.get('/', getHome);

export default router;
