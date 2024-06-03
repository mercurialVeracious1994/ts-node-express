// @ts-ignore
import {User, UserCreationAttributes} from "../../database/models/User";
import {StatusCodes} from 'http-status-codes';
import ApiError from "../error/ApiError";
import {logger} from "../utility/Logger";

interface IUserService {
    getById(id: string): Promise<User | ApiError>

    getAllUsers(): Promise<User[] | ApiError>

    createUser(payload: UserCreationAttributes): Promise<User | ApiError>

    updateUser(id: string, payload: Partial<UserCreationAttributes>): Promise<User | ApiError>
}

export const UserService: IUserService = {
    getById: async (id: string): Promise<User | ApiError> => {
        const user = await User.findByPk(id);
        if (!user) {
            const error = new ApiError(StatusCodes.NOT_FOUND, 'User not found');
            logger.error(error);
            return error;
        }
        return user;
    },
    getAllUsers: async () => {
        const users = await User.findAll();
        if (!users) {
            const error = new ApiError(StatusCodes.NOT_FOUND, ' No User found');
            logger.error(error);
            return error;
        }
        return users;
    },
    createUser: async (payload: UserCreationAttributes) => {
        const user = User.create(payload);
        if (!user) {
            const error = new ApiError(StatusCodes.BAD_REQUEST, ' No User Created');
            logger.error(error);
            return error;
        }
        return user;
    },
    updateUser: async (id: string, payload: Partial<UserCreationAttributes>) => {
        const user = await User.findByPk(id);
        if (!user) {
            const error = new ApiError(StatusCodes.NOT_FOUND, ' No User found');
            logger.error(error);
            return error;
        }
        return user.update(payload);
    }
}