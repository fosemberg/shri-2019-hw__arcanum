var page = '1-1-file-list'
module.exports = {
    block: 'page',
    title: page,
    head: [
        {elem: 'css', url: `${page}.css`},
    ],
    scripts: [{elem: 'js', url: `${page}.min.js`}],
    mods: {theme: 'islands'},
    content: [
        {block: `${page}-content`},
        // {
        //     block: 'input',
        //     mods: {theme: 'islands', size: 's', 'has-clear': true},
        //     val: 'value',
        //     placeholder: 'placeholder'
        // }
    ]
}
