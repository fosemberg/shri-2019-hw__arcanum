block('search-input')(
    tag()('span'),
    content()(function () {
    return {
        block: 'input',
        mods: {theme: 'islands', size: 's', 'has-clear': true},
        val: 'value',
        placeholder: 'placeholder'
    }
}))
