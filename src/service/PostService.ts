// @ts-ignore
import {Post, PostCreationAttributes} from "../../database/models/Post";
import {StatusCodes} from 'http-status-codes';
import ApiError from "../error/ApiError";
import {logger} from "../utility/Logger";
import {User} from "../../database/models/User";

interface IPostService {
    getById(id: string): Promise<Post | ApiError>

    getAllPosts(): Promise<Post[] | ApiError>

    createPost(payload: PostCreationAttributes): Promise<Post | ApiError>

    updatePost(id: string, payload: Partial<PostCreationAttributes>): Promise<Post | ApiError>
}

export const PostService: IPostService = {
    getById: async (id: string): Promise<Post | ApiError> => {
        const post = await Post.findByPk(id, {include: User});
        if (!post) {
            const error = new ApiError(StatusCodes.NOT_FOUND, 'Post not found');
            logger.error(error);
            return error;
        }
        return post;
    },
    getAllPosts: async () => {
        const posts = await Post.findAll({include: User});
        if (!posts) {
            const error = new ApiError(StatusCodes.NOT_FOUND, ' No Post found');
            logger.error(error);
            return error;
        }
        return posts;
    },
    createPost: async (payload: PostCreationAttributes) => {
        const post = Post.create(payload);
        if (!post) {
            const error = new ApiError(StatusCodes.BAD_REQUEST, ' No Post Created');
            logger.error(error);
            return error;
        }
        return post;
    },
    updatePost: async (id: string, payload: Partial<PostCreationAttributes>) => {
        const post = await Post.findByPk(id);
        if (!post) {
            const error = new ApiError(StatusCodes.NOT_FOUND, ' No Post found');
            logger.error(error);
            return error;
        }
        return post.update(payload);
    }
}