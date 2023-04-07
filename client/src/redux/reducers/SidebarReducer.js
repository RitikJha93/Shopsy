export const sidebarReducer = (state = { value: true }, action) => {
    switch (action.type) {
        case 'SIDEBAR_OPEN':
            return { value: true }
        case 'SIDEBAR_CLOSE':
            return { value: false }
        default:
            return state
    }
}