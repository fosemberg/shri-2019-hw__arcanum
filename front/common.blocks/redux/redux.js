const INIT = '@@init';

class Store {
    constructor(
        reducer,
        middleware = dispatch => action => dispatch(action)
    ) {
        this._reducer = reducer;
        this._middleware = middleware;
        this._state = undefined;
        this._listeners = [];
        this.dispatch({
            type: INIT
        })
    }

    getState() {
        return this._state;
    }

    subscribe(cb) {
        this._listeners.push(cb);
        return () => {
            const index = this._listeners.indexOf(cb);
            this._listeners.splice(index, 1);
        };
    }

    dispatchWithoutMiddleWare(action) {
        this._state = this._reducer(this._state, action);
        this._notifyListeners();
    }

    dispatch(action) {
        this._middleware(this.dispatchWithoutMiddleWare.bind(this), this._state)(action);
    }

    _notifyListeners() {
        this._listeners.forEach(listener => {
            listener(this._state);
        })
    }
}


class View {
    constructor(el, store) {
        this._el = el;
        this._store = store;
        this._unsubscribe = store.subscribe(
            this._prepareRender.bind(this)
        );
        this._prepareRender(store.getState());
    }

    _prepareRender(state) {
        this._el.innerHTML = this.render(state);
    }

    render() {
        throw new Error('This method should be overridden');
    }

    destroy() {
        this._el.innerHTML = '';
        this._unsubscribe();
    }
}

