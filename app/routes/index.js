import express from 'express';
import articleRoutes from './articles';

const router = express.Router();

router.use('/article', articleRoutes);

export default router;