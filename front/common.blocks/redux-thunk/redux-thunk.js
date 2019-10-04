const thunk = ({dispatch, getState}) =>
    action =>
        typeof action === 'function'
            ? action(dispatch, getState)
            : dispatch(action);

const testMiddleWare = ({dispatch, getState}) =>
    action => {
        console.log('testMiddleWare: ', action);
        return dispatch(action);
    };

const testMiddleWare2 = ({dispatch, getState}) =>
        action => {
    console.log(action);
    return dispatch(action);
};
