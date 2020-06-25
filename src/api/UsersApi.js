import { Http } from '../http';

export class UsersApi {
    static authHeader = (token) => ({ Authorization: `Bearer ${token}` });
    static fetchAll = ({ token }) => {
        return Http.get('/users/', this.authHeader(token));
    };
    static findOne = ({ userId, token }) => {
        return Http.get(`/users/${userId}`, this.authHeader(token));
    };
}
