const {exec} = require('child_process');
const {RESPONSE} = require('./config');

const execCommand = (
    command,
    callbackOut = x => x,
    callbackErr = callbackOut
) =>
    exec(command, (err, out) =>
        err
            ? callbackErr(err) && console.log(err)
            : callbackOut(out)
    );

const execCommandWithRes = (
    command,
    res,
    callbackOut = x => x,
    callbackErr = RESPONSE.NO_ROUT(res)
) =>
    execCommand(
        command,
        json => res.json(callbackOut(json)),
        callbackErr
    );

const arrayFromOut = out =>
    typeof out === 'string'
        ? out
            .split('\n')
            .slice(0, -1)
        : out;

module.exports = {
    execCommand,
    execCommandWithRes,
    arrayFromOut,
};