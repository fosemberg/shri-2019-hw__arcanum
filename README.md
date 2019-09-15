====Основное задание====

Реализовать сервер на Node.js, который предоставляет клиенту API для работы с git репозиториями.

Условия:
- путь до папки с репозиториями передается как аргумент командной строки
- сервер на Express
- для работы с git использовать готовые библиотеки нельзя

//commitHash == branchName//

API состоит из следующих HTTP-запросов:

**GET /api/repos**

Возвращает массив репозиториев, которые имеются в папке.

**GET /api/repos/:repositoryId/commits/:commitHash**

Возвращает массив коммитов в данной ветке (или хэше коммита) вместе с датами их создания и названием.

**GET /api/repos/:repositoryId/commits/:commitHash/diff**

Возвращает diff коммита в виде строки.

**GET /api/repos/:repositoryId(/tree/:commitHash/:path)**

Возвращает содержимое репозитория по названию ветки (или хэшу комита). Параметр repositoryId - название репозитория (оно же - имя папки репозитория). То, что в скобках - опционально, если отсутствует и branchName, и path - отдать актуальное содержимое в корне в главной ветке репозитория.

Примеры:
/api/repos/cool-timer
/api/repos/cool-timer/tree/cool-branch/src/components
/api/repos/cool-timer/tree/master/src/components
/api/repos/cool-timer/tree/e1r2r32b321bdad2e1knbh231/src/components

**GET /api/repos/:repositoryId/blob/:commitHash/:pathToFile**

Возвращает содержимое конкретного файла, находящегося по пути pathToFile в ветке (или по хэшу коммита) branchName. С используемой памятью должно быть все в порядке.

Примеры:
/api/repos/cool-timer/blob/cool-branch/src/components/Header/index.tsx

**DELETE /api/repos/:repositoryId**

Безвозвратно удаляет репозиторий

**POST /api/repos + { url: ‘repo-url’ }**

Добавляет репозиторий в список, скачивает его по переданной в теле запроса ссылке и добавляет в папку со всеми репозиториями.

------------

====Бонус====

Сделать **пагинацию** для списка коммитов (формат запроса придумать самим)

====Супер Бонус====

Реализовать HTTP-запрос для **подсчета символов** в репозитории, возвращает объект, в котором ключ - это символ, а значение - количество таких символов в репозитории. Во время запроса, сервер должен работать - то есть отвечать на другие запросы.

project dependency on some linux cli:
  - git
  - perl
  - grep
  - echo
  - ls
  - find
  - xargs
  - cat
  - tr
  - mv  

links: using while developing:
- [How to determine if nodejs child_process failed due to timeout?](https://stackoverflow.com/questions/41810791/how-to-determine-if-nodejs-child-process-failed-due-to-timeout)
- [node/child_process official docs](https://nodejs.org/api/child_process.html)
- [Удаление всех специальных символов из строки в Bash
](http://qaru.site/questions/1248159/removing-all-special-characters-from-a-string-in-bash)
- [How do I concatenate all the files in a given directory in order of date, where I want the newest file on top?](https://unix.stackexchange.com/questions/40922/how-do-i-concatenate-all-the-files-in-a-given-directory-in-order-of-date-where)
- [How to suppress binary files from matching results
](https://unix.stackexchange.com/questions/40922/how-do-i-concatenate-all-the-files-in-a-given-directory-in-order-of-date-where)
- [How do I grep recursively?](https://stackoverflow.com/questions/1987926/how-do-i-grep-recursively)
- [No binaries in grep](https://stackoverflow.com/questions/25853722/how-to-suppress-binary-file-matching-results-in-grep)
- [Finding all non binaries files](https://unix.stackexchange.com/questions/46276/finding-all-non-binary-files)

good to integrate:
- jest:
  - [jest-mock-axios](https://www.npmjs.com/package/jest-mock-axios)
  - [Testing Axios Requests With Jest
](https://dev.to/benweiser/testing-axios-requests-with-jest-25no)
  - [Mocking API Requests with Jest](https://medium.com/@lucaspenzeymoog/mocking-api-requests-with-jest-452ca2a8c7d7)