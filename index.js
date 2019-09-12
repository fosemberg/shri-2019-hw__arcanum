const express = require('express');
const { exec } = require('child_process');
const fs = require('fs');

const pathToRepos = './repos/';

const execCommand = (command, callback) => {
  exec(command, (err, out) => {
    if (err) {
      callback(err);
    }
    else {
      callback(out);
    }
  })
};

gen = (command) => (req, res) => execCommand( command, commit => res.json({commit}));

const readGitCommit = (callback) => execCommand('cd repos/1 && repos log --format="%s"', callback);

const app = express();

app.use(express.static('static'));

// Возвращает массив репозиториев, которые имеются в папке.
app.get('/api/repos', (req, res) => {
  fs.readdir(pathToRepos, (err, files) => {
    res.json(files);
  });
});

// Возвращает массив коммитов в данной ветке (или хэше коммита) вместе с датами их создания.
app.get('/api/repos/:repositoryId/commits/:commitHash', ({params: {repositoryId, commitHash}}, res) => {
  exec(`cd repos/${repositoryId} && git checkout ${commitHash} && git log --format="%s - %ad"`, (err, out) => {
    if (err) {
      res.json({error: err})
    } else {
      res.json(out.split('\n').slice(0, -1))
    }
  })
});

// Возвращает diff коммита в виде строки.
app.get('/api/repos/:repositoryId/commits/:commitHash/diff', ({params: {repositoryId, commitHash}}, res) => {
  exec(`cd repos/${repositoryId} && git diff ${commitHash}`, (err, out) => {
    if (err) {
      res.json({error: err})
    } else {
      res.json(out)
    }
  })
});

// GET /api/repos/:repositoryId(/tree/:commitHash/:path)
// Возвращает содержимое репозитория по названию ветки (или хэшу комита). Параметр repositoryId - название репозитория (оно же - имя папки репозитория). То, что в скобках - опционально, если отсутствует и branchName, и path - отдать актуальное содержимое в корне в главной ветке репозитория.
//     Примеры:
// /api/repos/cool-timer
// /api/repos/cool-timer/tree/cool-branch/src/components
// /api/repos/cool-timer/tree/master/src/components
// /api/repos/cool-timer/tree/e1r2r32b321bdad2e1knbh231/src/components
app.get('/api/repos/:repositoryId', ({params: {repositoryId}}, res) => {
  fs.readdir(`${pathToRepos}${repositoryId}/`, (err, files) => {
    res.json(files);
  });
});

app.get('/api/repos/:repositoryId/tree/:commitHash', ({params: {repositoryId, commitHash}}, res) => {
  exec(`cd repos/${repositoryId} && git checkout ${commitHash} -q && ls`, (err, out) => {
    if (err) {
      res.json({error: err})
    } else {
      res.json(out.split('\n').slice(0, -1))
    }
  })
});

app.get('/api/repos/:repositoryId/tree/:commitHash/*', ({params: {repositoryId, commitHash, 0: path}}, res) => {
  exec(`cd repos/${repositoryId} && git checkout -q ${commitHash} && ls ${path}`, (err, out) => {
    if (err) {
      res.json({error: err})
    } else {
      res.json(out.split('\n').slice(0, -1))
    }
  })
});

// GET /api/repos/:repositoryId/blob/:commitHash/:pathToFile
// Возвращает содержимое конкретного файла, находящегося по пути pathToFile в ветке (или по хэшу коммита) branchName. С используемой памятью должно быть все в порядке.
//     Примеры:
// /api/repos/cool-timer/blob/cool-branch/src/components/Header/index.tsx

app.get('/api/repos/:repositoryId/blob/:commitHash/*', ({params: {repositoryId, commitHash, 0: path}}, res) => {
  exec(`cd repos/${repositoryId} && git checkout -q ${commitHash} && cat ${path}`, (err, out) => {
    if (err) {
      res.json({error: err})
    } else {
      res.json(out)
    }
  })
});

app.listen(3000);