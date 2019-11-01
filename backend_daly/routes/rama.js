import routerx from 'express-promise-router';
import ramaController from '../controllers/RamaController';

const router=routerx();

router.post('/add',ramaController.add);
router.get('/query',ramaController.query);
router.get('/list',ramaController.list);
router.put('/update',ramaController.update);
router.delete('/remove',ramaController.remove);
router.put('/activate',ramaController.activate);
router.put('/deactivate',ramaController.deactivate);

export default router;