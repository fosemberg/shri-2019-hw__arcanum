class Files extends View {
    constructor(el, store) {
        super(el, store);
        this._onInput = this._onInput.bind(this);
        this._el.addEventListener('change', this._onInput);
    }

    _onInput(event) {
        const action = setNameAction(event.target.value)
        console.log(action);
        this._store.dispatch(action);
    }

    render({searchQuery, files}) {
        console.log(searchQuery);
        return files
            .filter(file => Object.values(file)
                .filter(el => ~el.indexOf(searchQuery))
                .length !== 0
            )
            .reduce((accum, {
                fileType,
                name,
                lastCommit,
                commitMessage,
                committer,
                updated
            }) => `${accum}
        <tr class="table__row">
            <td class="table__cell">
                <div class="file file_type_dir">
                    <div class="file__icon file__icon_type_${fileType}"></div>
                    ${name}
                </div>
            </td>
            <td class="table__cell"><a class="link link__control i-bem" href="#" role="link"
                                       tabindex="0">${lastCommit}</a></td>
            <td class="table__cell">${commitMessage}</td>
            <td class="table__cell"><span class="user">${committer}</span></td>
            <td class="table__cell">${updated}</td>
        </tr>
        `, '')
    }

    destroy() {
        super.destroy();
        this._el.removeEventListener('change', this._onInput);
    }
}

new Files(document.querySelector(`.files`), store);
