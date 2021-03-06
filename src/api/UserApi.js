import { Http } from '../http';

export class UserApi {
    static authHeader = (token) => ({ Authorization: `Bearer ${token}` });
    static signUp = ({ email, password, name, lastName }) => {
        return Http.post('/auth/signup', { email, password, name, lastName });
    };
    static login = ({ email, password }) => {
        return Http.post('/auth/login', { email, password });
    };
    static logout = ({ token }) => {
        return Http.get('/auth/logout', { Authorization: `Bearer ${token}` });
    };
    static logoutAll = ({ token }) => {
        return Http.get('/auth/logoutall', this.authHeader(token));
    };
    static getCurrentUser = ({ token }) => {
        return Http.get('/users/me', this.authHeader(token));
    };
}
