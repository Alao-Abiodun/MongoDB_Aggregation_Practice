import express from 'express';
const router = express.Router();
import { signUp, fetchUsersByAge, fetchUsers, sortUserByAge, choosePlan, selectUserAge } from '../controllers/user.controller'

router.post('/signup', signUp);
router.get('/byAge', fetchUsersByAge);
router.get('/', fetchUsers)
router.get('/sortByAge', sortUserByAge);
router.patch('/select-plan', choosePlan)
router.get('/selectAge', selectUserAge)

export { router as User }; 



