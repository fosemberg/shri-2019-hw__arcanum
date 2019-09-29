class UserView extends View {
    constructor(el, store) {
        super(el, store);
    }

    render({name}) {
        return name;
    }

    destroy() {
        super.destroy();
    }
}

new UserView(document.querySelector(`.user`), store);
