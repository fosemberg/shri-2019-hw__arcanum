var page = '2-1-branches'
module.exports = {
    block: 'page',
    title: page,
    head: [
        {elem: 'css', url: `${page}.css`},
    ],
    content: {block: `${page}-content`}
}
