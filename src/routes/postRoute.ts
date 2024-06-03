import {Router} from 'express';
import {createPost, getAllPost, getPostByID, updatePost} from "../controller/PostController";
import {validate} from "../validation/common";
import {postCreateValidation, postUpdateValidation} from "../validation/PostValidation";

const router = Router();

router.get('/:id', getPostByID);

router.get('/', getAllPost);

router.post('/', postCreateValidation, validate, createPost);

router.patch('/', postUpdateValidation, validate, updatePost);

export default router;