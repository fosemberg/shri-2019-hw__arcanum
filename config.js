const {createMessageObject} = require('./configUtils');

const PATH_TO_REPOS = 'repos';
const GIT_LOG_FORMAT = '%h %s - %ad';

const MESSAGE = {
    NO_ROUT: 'Rout not found.',
    NO_REPOSITORY: 'Can\'t download repository with this url. Maybe we have already got repository with this name or url is not correct',
    REPOSITORY_DELETED: 'repository successfully deleted',
    REPOSITORY_CLONED: 'repository successfully cloned',
};

const RESPONSE = {
    NO_ROUT: res => () => res.status(404).json(createMessageObject(MESSAGE.NO_ROUT)),
    NO_REPOSITORY: res => () => res.status(500).json(createMessageObject(MESSAGE.NO_REPOSITORY)),
};

module.exports = {
    PATH_TO_REPOS,
    GIT_LOG_FORMAT,
    MESSAGE,
    RESPONSE,
};