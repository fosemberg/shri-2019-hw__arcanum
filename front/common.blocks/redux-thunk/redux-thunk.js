const thunk = ({dispatch, getState}) =>
    next =>
        action =>
            typeof action === 'function'
                ? action(dispatch, getState, extraArgument)
                : next(action);

const testMiddleWare = ({dispatch, getState}) =>
    next =>
        action => {
            console.log('testMiddleWare: ', action);
            return next(action);
        }
