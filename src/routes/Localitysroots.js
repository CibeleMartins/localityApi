import { Router } from 'express'; 
import LocalitysController from '../controllers/LocalitysControllers.js';

const router = Router()

router.get('/localitys', LocalitysController.getLocalitys)
router.post('/localitys', LocalitysController.postLocalitys)


export default router;