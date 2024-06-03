import {Router} from 'express';
import {validate} from "../validation/common";
import {userCreateValidation, userUpdateValidation} from "../validation/UserValidation";
import {createUser, getAllUser, getUserByID, updateUser} from "../controller/UserController";

const router = Router();

router.get('/:id', getUserByID);

router.get('/', getAllUser);

router.post('/', userCreateValidation, validate, createUser);

router.patch('/', userUpdateValidation, validate, updateUser);

export default router;