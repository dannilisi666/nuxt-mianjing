const KEY = "nuxt-token-key";
export const setToken = (token: string) => {
  return (useCookie(KEY).value = token);
};
export const getToken = () => {
  return useCookie(KEY, { maxAge: 60 * 60 * 24 * 14 }).value;
};
export const removeToken = () => {
  useCookie(KEY).value = "";
};
