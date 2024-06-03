export interface PostDetails {
    title: string,
    content: string,
    isPublished: boolean,
    authorId: string,
    authorName: string
}

export interface UserDTO {
    name: string,
    id: string,
    postDetails?: PostDetails[]
}