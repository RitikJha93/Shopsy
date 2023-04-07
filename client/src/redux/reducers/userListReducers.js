export const userListReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case "USER_LIST_REQUEST":
            return { loading: true };
        case "USER_LIST_SUCCESS":
            return { loading: false, users: action.payload };
        case "USER_LIST_FAILURE":
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};