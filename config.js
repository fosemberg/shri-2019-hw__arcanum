const {createMessageObject} = require('./configUtils');

const PATH_TO_REPOS = 'repos';
const PATH_TO_BACKUP = 'backup';
const GIT_LOG_FORMAT = '%h %s - %ad';

const MESSAGE = {
    NO_ROUT: 'Rout not found.',
    NO_REPOSITORY: 'Can\'t download repository with this url. Maybe we have already got repository with this name or url is not correct',
    REPOSITORY_DELETED: 'repository successfully deleted',
    REPOSITORY_CLONED: 'repository successfully cloned',
    COUNTING_LETTERS_ERROR: 'Server can\'t count letters in this repository, maybe because this repository is too big for this little server',
};

const RESPONSE = {
    NO_ROUT: res => () => res.status(404).json(createMessageObject(MESSAGE.NO_ROUT)),
    NO_REPOSITORY: res => () => res.status(500).json(createMessageObject(MESSAGE.NO_REPOSITORY)),
    COUNTING_LETTERS_ERROR: res => () => res.status(500).json(createMessageObject(MESSAGE.COUNTING_LETTERS_ERROR)),
};

module.exports = {
    PATH_TO_REPOS,
    PATH_TO_BACKUP,
    GIT_LOG_FORMAT,
    MESSAGE,
    RESPONSE,
};