const SET_NAME = 'SET_NAME';

const setNameAction = name => ({
    type: SET_NAME,
    payload: name
})

const reducer = (state, action) => {
    switch (action.type) {
        case SET_NAME:
            return {
                ...state,
                name: action.payload
            };
        case INIT:
        default:
            return {
                name: 'Anonymous'
            }
    }
}

class UserView extends View {
    constructor(el, store) {
        super(el, store);
        this._onInput = this._onInput.bind(this);
        this._el.addEventListener('change', this._onInput);
    }

    _onInput(event) {
        this._store.dispatch(setNameAction(event.target.value));
    }
    render({name}) {
        return `
        <div>${name}</div>
        <input value="${name}">
        `
    }

    destroy() {
        super.destroy();
        this._el.removeEventListener('change', this._onInput);
    }
}

const blockName = 'user';

const store = new Store(reducer);
const userView = new UserView(document.querySelector(`.${blockName}`), store);
