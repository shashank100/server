export default (state = { isOpen: false }, action) => {
    switch (action.type) {
        case "OPEN_SOCIAL_LOGIN_MODAL":
            return {
              isOpen: action.open,
            };
            break;
        case "CLOSE_SOCIAL_LOGIN_MODAL":
            return {
              isOpen: action.close,
            };
            break;
        default:
            return state;
            break;
    }
};
