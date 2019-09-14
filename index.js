const express = require('express');
const {exec} = require('child_process');

const pathToRepos = 'repos';

const execCommand = (
    command,
    outCallback = x => x,
    errCallback = outCallback
) =>
    exec(command, (err, out) =>
        err
            ? errCallback(err)
            : outCallback(out)
    );

execCommandWithRes = (
    command,
    res,
    callback = x => x
) =>
    execCommand(
        command,
        json =>
            res.json(callback(json)),
        () =>
            res
              .status(404)
              .json({message: 'Route Not found.'})
    );

arrayFromOut = out =>
  typeof out === 'string'
    ? out
      .split('\n')
      .slice(0, -1)
    : out;


const app = express();

app.use(express.static('static'));

app.get('some',
    (req, res) =>
        res.status(404)
);

// Возвращает массив репозиториев, которые имеются в папке.
app.get('/api/repos',
    (req, res) =>
        execCommandWithRes(
            `cd ${pathToRepos} &&
            ls`,
            res,
            arrayFromOut
        )
);

// Возвращает массив коммитов в данной ветке (или хэше коммита) вместе с датами их создания.
app.get('/api/repos/:repositoryId/commits/:commitHash',
    ({params: {repositoryId, commitHash}}, res) =>
        execCommandWithRes(
            `cd ${pathToRepos}/${repositoryId} &&
            git checkout -q ${commitHash} &&
            git log --format="%h %s - %ad"`,
            res,
            arrayFromOut
        )
);

// Возвращает diff коммита в виде строки.
app.get('/api/repos/:repositoryId/commits/:commitHash/diff',
    ({params: {repositoryId, commitHash}}, res) =>
        execCommandWithRes(
            `cd ${pathToRepos}/${repositoryId} &&
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
            `cd ${pathToRepos}/${repositoryId} &&
            ls`,
            res,
            arrayFromOut
        )
);

app.get('/api/repos/:repositoryId/tree/:commitHash',
    ({params: {repositoryId, commitHash}}, res) =>
        execCommandWithRes(
            `cd ${pathToRepos}/${repositoryId} &&
            git checkout ${commitHash} -q &&
            ls`,
            res,
            arrayFromOut
          )
);

app.get('/api/repos/:repositoryId/tree/:commitHash/*', ({params: {repositoryId, commitHash, 0: path}}, res) =>
    execCommandWithRes(
        `cd ${pathToRepos}/${repositoryId} &&
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
            `cd ${pathToRepos}/${repositoryId} &&
            git checkout -q ${commitHash} &&
            cat ${path}`,
            res
        )
);

// DELETE /api/repos/:repositoryId
// Безвозвратно удаляет репозиторий
// app.delete()


// POST /api/repos/:repositoryId + { url: ‘repo-url’ }
// Добавляет репозиторий в список, скачивает его по переданной в теле запроса ссылке и добавляет в папку со всеми репозиториями.
// app.post()

app.listen(3000);