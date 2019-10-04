const thunk = ({dispatch, getState}) =>
    next =>
        action =>
            typeof action === 'function'
                ? action(dispatch, getState, extraArgument)
                : next(action);
