export default (state = { isUserLoggedIn: false, type: null }, action) => {
    switch (action.type) {
        case "FB_LOGIN_SUCCESS":
            return {
              isUserLoggedIn: true,
              type: "FACEBOOK"
            };
            break;
        case "FB_LOGIN_FAILURE":
            return {
              isUserLoggedIn: false,
              type: "FACEBOOK"
            };
            break;
        case "FB_LOGOUT_SUCCESS":
            return {
              isUserLoggedIn: false,
              type: null
            };
        default:
            return state;
            break;
    }
};
