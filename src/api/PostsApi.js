import { Http } from '../http';

export class PostsApi {
    static authHeader = (token) => ({ Authorization: `Bearer ${token}` });
    static fetchAll = ({ token }) => {
        return Http.get('/posts/', this.authHeader(token));
    };
    static findOne = ({ postId, token }) => {
        return Http.get(`/posts/${postId}`, this.authHeader(token));
    };
    static findByUserId = ({ userId, token }) => {
        return Http.get(`/posts/user/${userId}`, this.authHeader(token));
    };
    static createPost = ({ title, body, token }) => {
        return Http.post('/posts/', { title, body }, this.authHeader(token));
    };
    static upVote = ({ postId, token }) => {
        return Http.get(`/posts/${postId}/up`, this.authHeader(token));
    };
    static downVote = ({ postId, token }) => {
        return Http.get(`/posts/${postId}/down`, this.authHeader(token));
    };
}
