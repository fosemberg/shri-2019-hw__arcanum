const app = require('./expressApp');
const {
    execCommandWithRes,
    arrayFromOut,
    getPage,
} = require('./utils');
const {
    PATH_TO_REPOS,
    GIT_LOG_FORMAT,
    MESSAGE,
    RESPONSE,
} = require('./config');
const {createMessageObjectString} = require('./configUtils');

app.get('some',
    (req, res) =>
        res.status(404)
);

// Возвращает массив репозиториев, которые имеются в папке.
app.get('/api/repos',
    (req, res) =>
        execCommandWithRes(
            `cd ${PATH_TO_REPOS} &&
            ls`,
            res,
            arrayFromOut
        )
);

// Возвращает массив коммитов в данной ветке (или хэше коммита) вместе с датами их создания.
app.get('/api/repos/:repositoryId/commits/:commitHash',
    ({params: {repositoryId, commitHash}, query: {pageSize, pageNumber}}, res) =>
        execCommandWithRes(
            `cd ${PATH_TO_REPOS}/${repositoryId} &&
            git checkout -q ${commitHash} &&
            git log --format="${GIT_LOG_FORMAT}"`,
            res,
            out => getPage(arrayFromOut(out), pageSize, pageNumber)
        )
);

// Возвращает diff коммита в виде строки.
app.get('/api/repos/:repositoryId/commits/:commitHash/diff',
    ({params: {repositoryId, commitHash}}, res) =>
        execCommandWithRes(
            `cd ${PATH_TO_REPOS}/${repositoryId} &&
            git diff ${commitHash}`,
            res
        )
);

// GET /api/repos/:repositoryId(/tree/:commitHash/:path)
// Возвращает содержимое репозитория по названию ветки (или хэшу комита). Параметр repositoryId - название репозитория (оно же - имя папки репозитория). То, что в скобках - опционально, если отсутствует и branchName, и path - отдать актуальное содержимое в корне в главной ветке репозитория.
//     Примеры:
// /api/repos/cool-timer
// /api/repos/cool-timer/tree/cool-branch/src/components
// /api/repos/cool-timer/tree/master/src/components
// /api/repos/cool-timer/tree/e1r2r32b321bdad2e1knbh231/src/components
app.get('/api/repos/:repositoryId',
    ({params: {repositoryId}}, res) =>
        execCommandWithRes(
            `cd ${PATH_TO_REPOS}/${repositoryId} &&
            ls`,
            res,
            arrayFromOut
        )
);

app.get('/api/repos/:repositoryId/tree/:commitHash',
    ({params: {repositoryId, commitHash}}, res) =>
        execCommandWithRes(
            `cd ${PATH_TO_REPOS}/${repositoryId} &&
            git checkout ${commitHash} -q &&
            ls`,
            res,
            arrayFromOut
          )
);

app.get('/api/repos/:repositoryId/tree/:commitHash/*', ({params: {repositoryId, commitHash, 0: path}}, res) =>
    execCommandWithRes(
        `cd ${PATH_TO_REPOS}/${repositoryId} &&
        git checkout -q ${commitHash} &&
        ls ${path}`,
        res,
        arrayFromOut
    )
);

// GET /api/repos/:repositoryId/blob/:commitHash/:pathToFile
// Возвращает содержимое конкретного файла, находящегося по пути pathToFile в ветке (или по хэшу коммита) branchName. С используемой памятью должно быть все в порядке.
//     Примеры:
// /api/repos/cool-timer/blob/cool-branch/src/components/Header/index.tsx

app.get('/api/repos/:repositoryId/blob/:commitHash/*',
    ({params: {repositoryId, commitHash, 0: path}}, res) =>
        execCommandWithRes(
            `cd ${PATH_TO_REPOS}/${repositoryId} &&
            git checkout -q ${commitHash} &&
            cat ${path}`,
            res
        )
);

app.get('/api/repos/:repositoryId/count',
    ({params: {repositoryId}}, res) =>
        execCommandWithRes(
            `cd ${PATH_TO_REPOS}/${repositoryId} &&
            find . -type f -exec grep 'string' '{}' -s -l -I \\; | xargs cat | perl -0777 -nE 's/\\n//g; $c{$_}++ for split //; say "\\"$_\\": \\"$c{$_}\\"," for sort keys %c' | tr -cd "[:print:]\\n" | egrep -v '""|"\\\\"|"$|^":'`,
            res,
            x => {
                console.log(x)
                let newStr = "{ " + x.slice(0, -2) + "}";
                // console.log(arrayFromOut(x));
                console.log(JSON.parse(newStr));
                return JSON.parse(newStr)
            }
        )
);

// DELETE /api/repos/:repositoryId
// Безвозвратно удаляет репозиторий
app.delete('/api/repos/:repositoryId',
    ({params: {repositoryId}}, res) =>
        execCommandWithRes(
            `rm -rf ${PATH_TO_REPOS}/${repositoryId} &&
            echo '${createMessageObjectString(MESSAGE.REPOSITORY_DELETED)}'`,
            res,
            x => JSON.parse(x),

        )
);

// POST /api/repos/:repositoryId + { url: ‘repo-url’ }
// Добавляет репозиторий в список, скачивает его по переданной в теле запроса ссылке и добавляет в папку со всеми репозиториями.
app.post('/api/repos/:repositoryId',
        ({params: {repositoryId}, body: {url}}, res) => {
            console.log(repositoryId, url);
            execCommandWithRes(
              `cd ${PATH_TO_REPOS} &&
              git clone ${url} ${repositoryId} && 
              echo '${createMessageObjectString(MESSAGE.REPOSITORY_CLONED)}'`,
              res,
                x => JSON.parse(x),
                RESPONSE.NO_REPOSITORY(res)
            )
        }
);

app.post('/api/repos',
        ({body: {url}}, res) =>
            execCommandWithRes(
                `cd ${PATH_TO_REPOS} &&
                git clone ${url} && 
                echo '${createMessageObjectString(MESSAGE.REPOSITORY_CLONED)}'`,
                res,
                x => JSON.parse(x),
                RESPONSE.NO_REPOSITORY(res)
        )
);

app.listen(3000);