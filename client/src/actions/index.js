export default class UserActions {
  static setUser(user) {
    return (dispatch) => {
      return dispatch({
        type: "SET_USER",
        payload: user
      });
    }
  }
}