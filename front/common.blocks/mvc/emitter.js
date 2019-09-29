const emitter = new EventTarget();

listener = () => {};
const eventName = '';

emitter.addEventListener(eventName, listener);
emitter.removeEventListener(eventName, listener);
emitter.dispatchEvent(eventName['some']);
