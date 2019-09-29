class Model extends EventTarget {
    constructor(initialState) {
        super();
        this._state = initialState;
    }

    getState() {
        return this._state;
    }

    setState(state) {
        this._state = state;
        this.dispatchEvent(new Event('model:change'));
    }
}
