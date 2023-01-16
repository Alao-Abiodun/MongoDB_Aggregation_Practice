import express from 'express';
const router = express.Router();
import { signUp, fetchUsersByAge, fetchUsers, sortUserByAge } from '../controllers/user.controller'

router.post('/signup', signUp);
router.get('/byAge', fetchUsersByAge);
router.get('/', fetchUsers)
router.get('/sortByAge', sortUserByAge);

export { router as User }; 



