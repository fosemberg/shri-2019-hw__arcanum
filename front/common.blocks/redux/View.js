class View {
    constructor(el, models = {}) {
        this._prepareRender = this._prepareRender(this);

        this._models = models;
        this._el = el;
        this._prepareRender();
        this._subscribe();
    }

    _subscribe() {
        Object.values(this._models).forEach(model => {
            model.addEventListener('model:change', this._prepareRender);
        });
    }

    _unsubscribe() {
        Object.values(this._models).forEach(model => {
            model.removeEventListener('model:change', this._prepareRender);
        })
    }

    prepareRender() {
        const modelsData = Object.keys(this._models).reduce((acc, key) => {
            acc[key] = this._models[key].getState();
            return acc;
        })
    }

    destroy() {
        this._unsubscribe();
        this._el.innerHTML = '';
    }
}
