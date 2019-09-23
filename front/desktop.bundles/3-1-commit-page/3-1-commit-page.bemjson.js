var page = '3-1-commit-page'
module.exports = {
    block: 'page',
    title: page,
    head: [
        {elem: 'css', url: `${page}.css`},
    ],
    content: {block: `${page}-content`}
}

