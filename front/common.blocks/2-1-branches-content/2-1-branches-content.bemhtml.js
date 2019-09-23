var commitsMock = [
    {branchName: 'trunk', commitHash: '6748ds893432438dsd823329d923482d'},
    {branchName: 'users/a-aidyn00/my-feature-2', commitHash: '7748ds893432438dsd823329d923482d'},
    {branchName: 'users/a-aidyn00/my-feature-3', commitHash: '8748ds893432438dsd823329d923482d'},
    {branchName: 'users/a-aidyn00/my-feature-5', commitHash: '9748ds893432438dsd823329d923482d'},
    {branchName: 'users/a-aidyn00/my-feature-6', commitHash: '1748ds893432438dsd823329d923482d'},
    {branchName: 'users/a-aidyn00/my-feature-7', commitHash: '2748ds893432438dsd823329d923482d'},
    {branchName: 'users/a-aidyn00/my-feature-8', commitHash: '3748ds893432438dsd823329d923482d'},
    {branchName: 'users/a-aidyn00/my-feature-9', commitHash: '4748ds893432438dsd823329d923482d'},
    {branchName: 'users/a-aidyn00/my-feature-10', commitHash: '5748ds893432438dsd823329d923482d'},
    {branchName: 'users/a-aidyn00/my-feature-11', commitHash: '4548ds893432438dsd823329d923482d'},
    {branchName: 'users/a-aidyn00/my-feature-12', commitHash: '3248ds893432438dsd823329d923482d'},
    {branchName: 'users/a-aidyn00/my-feature-13', commitHash: '1348ds893432438dsd823329d923482d'}
]
var page = '2-1-branches'
block(`${page}-content`).content()(function () {
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
                                        content: 'files'
                                    },
                                    {
                                        block: 'tabs__item',
                                        mods: {
                                            state: 'active'
                                        },
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
                                        {
                                            elem: 'cell',
                                            mods: {
                                                type: 'head'
                                            },
                                            tag: 'th',
                                            content: 'name'
                                        },
                                        {
                                            elem: 'cell',
                                            mods: {
                                                type: 'head'
                                            },
                                            tag: 'th',
                                            content: 'Commit hash'
                                        }
                                    ]
                                }
                            },
                            {
                                elem: 'body',
                                tag: 'tbody',
                                content: [
                                    commitsMock.map(({
                                                         branchName,
                                                         commitHash
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
                                                        type: 'branch'
                                                    },
                                                    content: [
                                                        {
                                                            block: 'file__icon',
                                                            mods: {
                                                                type: 'branch'
                                                            }
                                                        },
                                                        branchName
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
                                                    content: commitHash
                                                }
                                            }
                                        ]
                                    })),
                                ]
                            }
                        ]
                    },
                    {
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
                                        type: 'branch'
                                    },
                                    content: [
                                        {
                                            block: 'file__icon',
                                            mods: {
                                                type: 'branch'
                                            }
                                        },
                                        ' api '
                                    ]
                                }
                            },
                            {
                                block: 'git-log-row__item',
                                mods: {
                                    padding: 'both'
                                },
                                content: {
                                    block: 'git-log-row__message',
                                    tag: 'span',
                                    content: {
                                        block: 'link',
                                        tag: 'a',
                                        attrs: {
                                            href: '#'
                                        },
                                        content: '1748ds893432438dsd823329d923482d'
                                    }
                                }
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
                    },
                    commitsMock.map(({
                                         branchName,
                                         commitHash
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
                                        type: 'branch'
                                    },
                                    content: [
                                        {
                                            block: 'file__icon',
                                            mods: {
                                                type: 'branch'
                                            }
                                        },
                                        branchName
                                    ]
                                }
                            },
                            {
                                block: 'git-log-row__item',
                                mods: {
                                    padding: 'both'
                                },
                                content: {
                                    block: 'git-log-row__message',
                                    tag: 'span',
                                    content: {
                                        block: 'link',
                                        tag: 'a',
                                        attrs: {
                                            href: '#'
                                        },
                                        content: commitHash
                                    }
                                }
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
    };
});
