const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
const GET_FILES_START = 'GET_FILES_START';
const GET_FILES_SUCCESS = 'GET_FILES_SUCCESS';
const GET_FILES_ERROR = 'GET_FILES_ERROR';

const host = 'http://localhost:3009';
const pathToFiles = 'api/repos/server-info';

const createAction = (type, payload) => ({type, payload});

const setSearchQueryAction = searchQuery => createAction(SET_SEARCH_QUERY, searchQuery);
const getFilesSuccess = files => createAction(GET_FILES_SUCCESS, files);
const getFilesFailure = error => createAction(GET_FILES_ERROR, error);

const getFilesStart = () => {
    return (dispatch, state) => {
        const files = fetch(`${host}/${pathToFiles}/`)
            .then(res => res.json())
            .then(json => dispatch(getFilesSuccess(json)))
            .catch(error => dispatch(getFilesFailure(error)));
    }
};

const reducer = (state, action) => {
    switch (action.type) {
        case SET_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.payload
            };
        case GET_FILES_SUCCESS:
            return {
                ...state,
                files: action.payload
            };
        case GET_FILES_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case INIT: {
            return {
                searchQuery: '',
                files: [],
            }
        }
        default:
            return state
    }
};

const store = new Store(reducer, thunk);

getFilesStart()(store.dispatch);
