import {PostService} from "../service/PostService";
import {Request, Response} from "express";
import {IPostRequest} from "../request/postRequest";
import ApiError from "../error/ApiError";

export const getPostByID = async (req: Request, res: Response) => {
    const id = (req.params.id) || "";
    const result = await PostService.getById(id as string);
    if (result instanceof ApiError) {
        res.status(result.statusCode).json(result)
    }
    res.status(200).json({post: result});
}

export const getAllPost = async (req: Request, res: Response) => {
    const result = await PostService.getAllPosts();
    if (result instanceof ApiError) {
        res.status(result.statusCode).json(result)
    }
    res.status(200).json({posts: result});
}

export const updatePost = async (req: Request, res: Response) => {
    const post = req.body as IPostRequest;
    const id = req.query.id as string || "";
    const result = await PostService.updatePost(id, post);
    if (result instanceof ApiError) {
        res.status(result.statusCode).json(result)
    }
    res.status(201).json({post: result});
}

export const createPost = async (req: Request, res: Response) => {
    const post = req.body as IPostRequest;
    const result = await PostService.createPost(post);
    if (result instanceof ApiError) {
        res.status(result.statusCode).json(result)
    }
    res.status(201).json({posts: result});
}
