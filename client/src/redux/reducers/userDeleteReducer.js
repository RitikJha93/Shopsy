export const userDeleteReducer = (state = { msg: '' }, action) => {
    switch (action.type) {
        case "USER_DELETE_REQUEST":
            return { loading: true };
        case "USER_DELETE_SUCCESS":
            return { loading: false, success: true, msg: action.payload };
        case "USER_DELETE_FAILURE":
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
