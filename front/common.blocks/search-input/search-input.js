class SearchInput extends View {
    constructor(el, store) {
        super(el, store);
        this._onInput = this._onInput.bind(this);
        this._el.addEventListener('change', this._onInput);
    }

    _onInput(event) {
        this._store.dispatch(setSearchQueryAction(event.target.value));
    }

    render({searchQuery}) {
        return `
        <input class="input__control i-bem input__control_js_inited" value="${searchQuery}" placeholder="placeholder">
        `
    }

    destroy() {
        super.destroy();
        this._el.removeEventListener('change', this._onInput);
    }
}

new SearchInput(document.querySelector(`.search-input input`), store);
