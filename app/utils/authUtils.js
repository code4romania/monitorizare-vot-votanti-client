
export function isLoggedIn() {
  const token = sessionStorage.getItem('jwtToken');
  return token !== undefined && token !== null;
}
