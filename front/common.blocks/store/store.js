const SET_NAME = 'SET_NAME';
const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';

const createAction = (type, payload) => ({type, payload})

const setNameAction = name => createAction(SET_NAME, name);
const setSearchQueryAction = searchQuery => createAction(SET_SEARCH_QUERY, searchQuery)

const reducer = (state, action) => {
    switch (action.type) {
        case SET_NAME:
            return {
                ...state,
                name: action.payload
            };
        case SET_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.payload
            }
        case INIT: {
            return {
                files: [
                    {
                        fileType: 'dir',
                        name: 'api',
                        lastCommit: 'd53dsv',
                        commitMessage: '[vcs] move http to arc',
                        committer: 'noxoomo',
                        updated: '4 s ago'
                    },
                    {
                        fileType: 'dir',
                        name: 'ci',
                        lastCommit: 'c53dsv',
                        commitMessage: '[vcs] rest for empty commit message',
                        committer: 'nikitxskv',
                        updated: '1 min ago'
                    },
                    {
                        fileType: 'dir',
                        name: 'contrib',
                        lastCommit: 's53dsv',
                        commitMessage: '[vcs] change owner to g:arc',
                        committer: 'nalpp',
                        updated: '16:25'
                    },
                    {
                        fileType: 'readme',
                        name: 'README.md',
                        lastCommit: 'h5jdsi',
                        commitMessage: '[vcs] add readme',
                        committer: 'pg',
                        updated: 'Dec 29, 2017'
                    },
                    {
                        fileType: 'file',
                        name: 'ya.make',
                        lastCommit: 'k5jdsv',
                        commitMessage: '[vcs] move http to arc',
                        committer: 'mvel',
                        updated: 'Dec 29, 2017'
                    },
                ],
                name: 'Anonymous',
                searchQuery: '',
            }
        }
        default:
            return state
    }
}

const store = new Store(reducer);
