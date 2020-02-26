function logout() {
  // remove user from local storage to log user out
  sessionStorage.clear();
  window.location.replace("/");
}
export default logout;
