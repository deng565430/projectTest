import Router from 'koa-router';
import index from '../controller/index';

const router = Router();

router.get('/', index.index())
  .get('updata', index.updata());

export default router;