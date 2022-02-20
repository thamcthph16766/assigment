import instance from "./config";

export const getAll = () => {
    const url = `/sanpham`;
    return instance.get(url);
};
export const get = (id) => {
    const url = `/sanpham/${id}`;
    return instance.get(url);
};
export const add = (post) => {
    const url = `/sanpham/`;
    return instance.post(url, post);
};
export const remove = (id) => {
    const url = `/sanpham/${id}`;
    return instance.delete(url);
};
export const update = (post) => {
    const url = `/sanpham/${post.id}`
};