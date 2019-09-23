const commitsMock = {
    today: [{
        title: 'Support new distbuild protocol',
        commitMessage: 'Не очень качественно написаны некоторые функции. Предлагаю исправить это недоразумение.',
        commitHash: 's324e8',
        committer: 'woodcutter',
        updated: ' 4 s ago'
    },
        {
            title: 'Force executing on MULTISLOT hosts by declaring Caches',
            commitMessage: 'Не очень правильно с точки зрения ООП написаны некоторые функции. Предлагаю исправить это.',
            commitHash: 's324e8',
            committer: 'rudskoy',
            updated: ' 1 min ago'
        },
        {
            title: 'Fixed run_deff_test in the realm',
            commitMessage: 'Не очень правильно с точки зрения ООП написаны некоторые функции. Предлагаю исправить это.',
            commitHash: 's324e8',
            committer: 'annaveronika',
            updated: ' at 16:25'
        }
    ],
    yesterday: [
        {
            title: 'Support HTTP resources',
            commitMessage: 'Не очень качественно написаны некоторые функции. Предлагаю исправить это недоразумение.',
            commitHash: 's324e8',
            committer: 'woodcutter',
            updated: ' 4 s ago'
        },
        {
            title: 'Fixed run_diff_test',
            commitMessage: 'Не очень правильно с точки зрения ООП написаны некоторые функции. Предлагаю исправить это.',
            commitHash: 's324e8',
            committer: 'rudskoy',
            updated: ' 1 min ago'
        },
        {
            title: 'Update ya-bin and test_tool',
            commitMessage: 'Не очень правильно с точки зрения ООП написаны некоторые функции. Предлагаю исправить это.',
            commitHash: 's324e8',
            committer: 'annaveronika',
            updated: ' at 16:25'
        },
    ]
}

const GitLogrow = ({
                       title,
                       commitHash,
                       commitMessage,
                       committer,
                       updated,
                   }) => ({
    block: 'history__Content',
    mix: {
        block: 'history__row'
    },
    content: {
        block: 'git-log-row',
        content: [
            {
                block: 'git-log-row__item',
                mods: {
                    display: 'flex'
                },
                content: [
                    {
                        block: 'git-log-row__title',
                        tag: 'span',
                        content: title
                    },
                    {
                        block: 'link',
                        mods: {
                            hide: 'touch'
                        },
                        mix: {
                            block: 'history__link',
                            mods: {
                                hide: 'desktop'
                            }
                        },
                        tag: 'a',
                        attrs: {
                            href: '#'
                        },
                        content: commitHash
                    }
                ]
            },
            {
                block: 'git-log-row__item',
                mix: {
                    block: 'text',
                    mods: {
                        size: 'xs'
                    }
                },
                content: commitMessage
            },
            {
                block: 'git-log-row__item',
                mix: {
                    block: 'text',
                    mods: {
                        size: 'xs'
                    }
                },
                content: [
                    {
                        block: 'link',
                        tag: 'a',
                        attrs: {
                            href: '#'
                        },
                        content: commitHash
                    },
                    ' by ',
                    {
                        block: 'user',
                        tag: 'span',
                        content: committer
                    },
                    updated
                ]
            }
        ]
    }
})

const page = '1-6-file-changes'
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
                        content: 'root/trunk/arcadia/addapter/ya.make'
                            .split('/')
                            .map(content => ({
                                    elem: 'item',
                                    content
                                })
                            )
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
                                        content: 'ya.make'
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
                                        content: 'details'
                                    },
                                    {
                                        block: 'tabs__item',
                                        mods: {
                                            state: 'active'
                                        },
                                        content: 'history'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        block: 'history',
                        mix: {
                            block: 'section',
                            mods: {
                                'indent-t': 'xxxxs'
                            }
                        },
                        content: [
                            {
                                block: 'history__title',
                                content: 'Today'
                            },
                            commitsMock.today.map(GitLogrow)
                        ]
                    },
                    {
                        block: 'history',
                        mix: {
                            block: 'section',
                            mods: {
                                'indent-b': 'm'
                            }
                        },
                        content: [
                            {
                                block: 'history__title',
                                content: 'Yesterday'
                            },
                            commitsMock.yesterday.map(GitLogrow)
                        ]
                    }
                ]
            },
            {block: 'footer'}
        ]
    };
});
