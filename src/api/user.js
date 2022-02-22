import instance from './config';

export const signup = (user) => {
    const url = "/signup";
    return instance.post(url, user);
}
export const signin = (user) => {
    const url = "/signin";
    return instance.post(url, user);
}
export const getAll = () => {
    const url = `/products/`;
    return instance.get(url);
};
export const get = (id) => {
    const url = `/thanhvien/${id}`;
    return instance.get(url);
};
export const add = (post) => {
    const url = `/thanhvien/`;
    return instance.post(url, post);
};
export const remove = (id) => {
    const url = `/thanhvien/${id}`;
    return instance.delete(url);
};