var page = '1-1-file-list'
module.exports = {
    block: 'page',
    title: page,
    head: [
        {elem: 'css', url: `${page}.css`},
    ],
    scripts: [{ elem: 'js', url: `${page}.min.js` }],
    content: {block: `${page}-content`}
}
