var headerMock = [
    'name',
    'Last commit',
    'Commit message',
    'Committer',
    'Updated'
]

var page = '1-1-file-list';
block(`${page}-content`)(
    content()(
        function () {
            return {
                block: 'layout',
                mix: {
                    block: 'theme',
                    mods: {
                        space: 'default',
                        size: 'default',
                        color: 'project-default',
                        gap: 'small',
                        font: 'default'
                    }
                },
                content: [
                    {block: 'header'},
                    {
                        block: 'layout__container',
                        mods: {
                            grow: 'true'
                        },
                        content: [
                            {
                                block: 'bread-crumbs',
                                mods: {
                                    'border-b': true
                                },
                                content: {
                                    elem: 'item',
                                    content: 'arcadia'
                                }
                            },
                            {
                                block: 'branch-info',
                                mods: {
                                    border: 'bottom'
                                },
                                content: [
                                    {
                                        elem: 'header',
                                        content: [
                                            {
                                                elem: 'name',
                                                content: 'arcadia'
                                            },
                                            {
                                                elem: 'select',
                                                mix: {
                                                    block: 'select',
                                                    mods: {
                                                        size: 'big'
                                                    }
                                                },
                                                content: [
                                                    {
                                                        block: 'select__name',
                                                        mods: {
                                                            color: 'secondary'
                                                        },
                                                        tag: 'span',
                                                        content: 'trunk'
                                                    },
                                                    {
                                                        block: 'select__arrow',
                                                        mods: {
                                                            position: 'baseline'
                                                        },
                                                        mix: {
                                                            block: 'arrow',
                                                            mods: {
                                                                state: 'down',
                                                                color: 'secondary'
                                                            }
                                                        },
                                                        tag: 'i'
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'search',
                                                content: {block: 'search-input'}
                                            },
                                        ]
                                    },
                                    {
                                        elem: 'info',
                                        content: [
                                            ' Last commit ',
                                            {
                                                block: 'link',
                                                tag: 'a',
                                                attrs: {
                                                    href: '#'
                                                },
                                                content: 'c4d248'
                                            },
                                            ' on ',
                                            {
                                                block: 'link',
                                                tag: 'a',
                                                attrs: {
                                                    href: '#'
                                                },
                                                content: '20 Oct 2017, 12:24'
                                            },
                                            ' by ',
                                            {
                                                block: 'user',
                                                tag: 'span',
                                                content: 'robot-srch-releaser'
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'tabs',
                                        mix: {
                                            block: 'tabs'
                                        },
                                        content: [
                                            {
                                                block: 'tabs__item',
                                                mods: {
                                                    state: 'active'
                                                },
                                                content: 'files'
                                            },
                                            {
                                                block: 'tabs__item',
                                                content: 'branches'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                block: 'table',
                                mods: {
                                    hide: 'touch'
                                },
                                tag: 'table',
                                content: [
                                    {
                                        elem: 'head',
                                        tag: 'thead',
                                        content: {
                                            elem: 'row',
                                            tag: 'tr',
                                            content: [
                                                headerMock.map(content => ({
                                                    elem: 'cell',
                                                    mods: {
                                                        type: 'head'
                                                    },
                                                    tag: 'th',
                                                    content
                                                })),
                                            ]
                                        }
                                    },
                                    {
                                        elem: 'body',
                                        tag: 'tbody',
                                        mix: {'block': 'desktop-files'},
                                    }
                                ]
                            },
                            {block: 'touch-files'}
                        ]
                    },
                    {block: 'footer'}
                ]
            }
        }
    )
)
