const updateCounter = (difference) => (dispatch) => {
    dispatch({ type: 'update', payload: difference });
}

export { updateCounter }