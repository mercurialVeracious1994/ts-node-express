import {Post} from "./Post";
import {User} from "./User";

export const buildAssociation = () => {
    Post.associate();
    User.associate();
}
