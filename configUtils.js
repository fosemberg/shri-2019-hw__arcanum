const createMessageObject = string => ({message: string});
const createMessageObjectString = string => JSON.stringify(createMessageObject(string));

module.exports = {
    createMessageObject,
    createMessageObjectString
};