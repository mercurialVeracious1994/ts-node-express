import {UserService} from "../service/UserService";
import {Request, Response} from "express";
import {IUserRequest} from "../request/userRequest";
import ApiError from "../error/ApiError";

export const getUserByID = async (req: Request, res: Response) => {
    const id = (req.params.id) || "";
    const result = await UserService.getById(id as string);
    if (result instanceof ApiError) {
        res.status(result.statusCode).json(result)
    }
    res.status(200).json({user: result});
}

export const getAllUser = async (req: Request, res: Response) => {
    const result = await UserService.getAllUsers();
    if (result instanceof ApiError) {
        res.status(result.statusCode).json(result)
    }
    res.status(200).json({users: result});
}

export const updateUser = async (req: Request, res: Response) => {
    const user = req.body as IUserRequest;
    const id = req.query.id as string || "";
    const result = await UserService.updateUser(id, user);
    if (result instanceof ApiError) {
        res.status(result.statusCode).json(result)
    }
    res.status(201).json({user: result});
}

export const createUser = async (req: Request, res: Response) => {
    const user = req.body as IUserRequest;
    const result = await UserService.createUser(user);
    if (result instanceof ApiError) {
        res.status(result.statusCode).json(result)
    }
    res.status(201).json({user: result});
}
