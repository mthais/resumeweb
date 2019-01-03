export default {
  isFetchingLoggingIn: false,
  isFetchingRegister: false,
  loggedUser: localStorage.getItem('loggedUser') && JSON.parse(localStorage.getItem('loggedUser')),
  registeredUser: undefined,
  token: localStorage.getItem('token') && JSON.parse(localStorage.getItem('token'))
}
