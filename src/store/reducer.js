const reducer = (state, action) => {
    if (action.type === 'update') {
        const counter = state.counter
        return {
            ...state,
            counter: counter + action.payload
        }
    }
    return state
}

export default reducer