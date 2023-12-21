export default defineNuxtRouteMiddleware((to, from) => {
  // isAuthenticated() is an example method verifying if a user is authenticated
  if (to.path === "/") {
    return navigateTo("/article");
  }
  const whiteList = ["/login", "/register"];
  const token = getToken();
  if (!token && !whiteList.includes(to.path)) {
    return navigateTo("/login");
  }
});
