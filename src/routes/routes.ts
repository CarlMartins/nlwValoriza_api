import { Router } from 'express';
import { CreateUserController } from '../controllers/CreateUserController';
import { CreateTagController } from '../controllers/CreateTagController';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { AuthenticateUserController } from '../controllers/AuthenticateUserController';
import { CreateComplimentController } from '../controllers/CreateComplimentController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ListUserSenderComplimentsController } from '../controllers/ListUserSenderComplimentsController';
import { ListUserReceivedComplimentsController } from '../controllers/ListUserReceivedComplimentsController';
import { ListTagsController } from '../controllers/ListTagsController';

const router = Router();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const createComplimentController = new CreateComplimentController();
const authenticateUserController = new AuthenticateUserController();
const listUserSenderComplimentsController = new ListUserSenderComplimentsController();
const listuserReceivedComplimentsController = new ListUserReceivedComplimentsController();
const listTagsController = new ListTagsController();

router.post('/users', createUserController.handle);
router.post('/tags', ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post('/login', authenticateUserController.handle);
router.post('/compliment', ensureAuthenticated, createComplimentController.handle);

router.get('/users/compliments/send', ensureAuthenticated, listUserSenderComplimentsController.handle);
router.get('/users/compliments/received', ensureAuthenticated, listuserReceivedComplimentsController.handle);
router.get('/tags', ensureAuthenticated, listTagsController.handle);

export { router };