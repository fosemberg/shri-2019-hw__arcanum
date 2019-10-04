const thunk = ({dispatch, getState}) =>
    action =>
        typeof action === 'function'
            ? action(dispatch, getState)
            : dispatch(action);
