import routerx from 'express-promise-router';
import personaCotroller from '../controllers/PersonaController';

const router=routerx();

router.post('/add',personaCotroller.add);
router.get('/query',personaCotroller.query);
router.get('/list',personaCotroller.list);
router.put('/update',personaCotroller.update);
router.delete('/remove',personaCotroller.remove);
router.put('/activate',personaCotroller.activate);
router.put('/deactivate',personaCotroller.deactivate);

export default router;
