import { Router } from 'express'; 
import LocalitysController from '../controllers/LocalitysControllers.js';

const router = Router()

router.get('/', LocalitysController.getLocalitys)
router.post('/localitys', LocalitysController.postLocalitys)


export default router;