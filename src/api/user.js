export const signin = (user) => {
    const url = "/signin";
    return instance.post(url, user);
} 