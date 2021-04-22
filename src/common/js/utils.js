export const getLocal = (name) => {
    return localStorage.getItem(name);
};
export const setLocal = (name, value) => {
    localStorage.setItem(name, value);
};
export const removeLocal = (name) => {
    localStorage.removeItem(name)
};