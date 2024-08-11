import express from 'express';
import appointmentController from '../../controllers/appointment';

const router = express.Router();

router.post('/appointment', appointmentController.createNew);

export default router