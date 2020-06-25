import { API_URL } from './constansts';

export class Http {
    static HEADERS = { 'Content-Type': 'application/json' };

    static async get(url, headers = {}) {
        return await request(url, 'GET', {}, headers);
    }

    static async put(url, data = {}, headers = {}) {
        return await request(url, 'PUT', data, headers);
    }

    static async post(url, data = {}, headers = {}) {
        return await request(url, 'POST', data, headers);
    }

    static async delete(url, headers = {}) {
        return await request(url, 'DELETE', {}, headers);
    }

    static async patch(url, data = {}, headers = {}) {
        return await request(url, 'PATCH', data, headers);
    }
}

export async function request(url, method = 'GET', data, headers = {}) {
    const config = {
        method,
        headers: { ...Http.HEADERS, ...headers },
    };

    if (method === 'POST' || method === 'PATCH' || method === 'PUT') {
        config.body = JSON.stringify(data);
    }
    return await fetch(API_URL + url, config);
}
