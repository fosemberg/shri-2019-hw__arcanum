var headerMock = [
    'name',
    'Last commit',
    'Commit message',
    'Committer',
    'Updated'
]
var contentMock = [
    {
        fileType: 'dir',
        name: 'api',
        lastCommit: 'd53dsv',
        commitMessage: '[vcs] move http to arc',
        committer: 'noxoomo',
        updated: '4 s ago'
    },
    {
        fileType: 'dir',
        name: 'ci',
        lastCommit: 'c53dsv',
        commitMessage: '[vcs] rest for empty commit message',
        committer: 'nikitxskv',
        updated: '1 min ago'
    },
    {
        fileType: 'dir',
        name: 'contrib',
        lastCommit: 's53dsv',
        commitMessage: '[vcs] change owner to g:arc',
        committer: 'nalpp',
        updated: '16:25'
    },
    {
        fileType: 'readme',
        name: 'README.md',
        lastCommit: 'h5jdsi',
        commitMessage: '[vcs] add readme',
        committer: 'pg',
        updated: 'Dec 29, 2017'
    },
    {
        fileType: 'file',
        name: 'ya.make',
        lastCommit: 'k5jdsv',
        commitMessage: '[vcs] move http to arc',
        committer: 'mvel',
        updated: 'Dec 29, 2017'
    },

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
                                            }
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
                                        content: [
                                            contentMock.map(({
                                                                 fileType,
                                                                 name,
                                                                 lastCommit,
                                                                 commitMessage,
                                                                 committer,
                                                                 updated
                                                             }) => ({
                                                elem: 'row',
                                                tag: 'tr',
                                                content: [
                                                    {
                                                        elem: 'cell',
                                                        mix: {
                                                            elem: 'cell'
                                                        },
                                                        tag: 'td',
                                                        content: {
                                                            block: 'file',
                                                            mods: {
                                                                type: 'dir'
                                                            },
                                                            content: [
                                                                {
                                                                    block: 'file__icon',
                                                                    mods: {
                                                                        type: fileType
                                                                    }
                                                                },
                                                                ` ${name} `
                                                            ]
                                                        }
                                                    },
                                                    {
                                                        elem: 'cell',
                                                        tag: 'td',
                                                        content: {
                                                            block: 'link',
                                                            tag: 'a',
                                                            attrs: {
                                                                href: '#'
                                                            },
                                                            content: lastCommit
                                                        }
                                                    },
                                                    {
                                                        elem: 'cell',
                                                        tag: 'td',
                                                        content: commitMessage
                                                    },
                                                    {
                                                        elem: 'cell',
                                                        tag: 'td',
                                                        content: {
                                                            block: 'user',
                                                            tag: 'span',
                                                            content: committer
                                                        }
                                                    },
                                                    {
                                                        elem: 'cell',
                                                        tag: 'td',
                                                        content: updated
                                                    }
                                                ]
                                            })),
                                        ]
                                    }
                                ]
                            },
                            contentMock.map(({
                                                 fileType,
                                                 name,
                                                 lastCommit,
                                                 commitMessage,
                                                 committer,
                                                 updated
                                             }) => ({
                                block: 'git-log-row',
                                mods: {
                                    hide: 'desktop',
                                    border: 'bottom',
                                    padding: 'both'
                                },
                                content: [
                                    {
                                        block: 'git-log-row__item',
                                        mods: {
                                            padding: 'both'
                                        },
                                        content: {
                                            block: 'file',
                                            mods: {
                                                type: fileType
                                            },
                                            content: [
                                                {
                                                    block: 'file__icon',
                                                    mods: {
                                                        type: fileType
                                                    }
                                                },
                                                 ` ${name} `
                                            ]
                                        }
                                    },
                                    {
                                        block: 'git-log-row__item',
                                        mods: {
                                            display: 'flex',
                                            padding: 'both'
                                        },
                                        content: {
                                            block: 'git-log-row__message',
                                            tag: 'span',
                                            content: commitMessage
                                        }
                                    },
                                    {
                                        block: 'git-log-row__item',
                                        mods: {
                                            padding: 'both'
                                        },
                                        content: [
                                            {
                                                block: 'link',
                                                tag: 'a',
                                                attrs: {
                                                    href: '#'
                                                },
                                                content: lastCommit
                                            },
                                            ` by ${committer}, ${updated} `
                                        ]
                                    },
                                    {
                                        block: 'git-log-row__arrow',
                                        mix: {
                                            block: 'arrow',
                                            mods: {
                                                state: 'right',
                                                color: 'faded',
                                                size: 'l'
                                            }
                                        },
                                        tag: 'i'
                                    }
                                ]
                            })),
                        ]
                    },
                    {block: 'footer'}
                ]
            }
        }
    )
)
