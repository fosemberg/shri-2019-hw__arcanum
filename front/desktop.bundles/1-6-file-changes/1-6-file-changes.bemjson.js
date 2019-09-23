var page = '1-6-file-changes'
module.exports = {
    block: 'page',
    title: page,
    head: [
        {elem: 'css', url: `${page}.css`},
    ],
    content: {block: `${page}-content`}
}
