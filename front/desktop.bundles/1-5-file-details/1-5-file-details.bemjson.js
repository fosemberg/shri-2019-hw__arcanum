var page = '1-5-file-details'
module.exports = {
    block: 'page',
    title: page,
    head: [
        {elem: 'css', url: `${page}.css`},
    ],
    content: {block: `${page}-content`}
}
