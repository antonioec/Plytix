import { IPosts } from './posts.model';

export interface IUsers {
    id: number;
    name: string;
    email: number;
    userPosts: IPosts;
}
