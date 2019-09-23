page = '3-1-commit-page'
block(`${page}-content`).content()(function() {
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
                content: {
                    block: 'branch-info',
                    content: [
                        {
                            elem: 'header',
                            mods: {
                                space: 'between',
                                align: 'baseline'
                            },
                            content: [
                                {
                                    elem: 'name',
                                    mods: {
                                        size: 'xl'
                                    },
                                    content: 'DEVTOOLS-4599: Add option to add extra whitespace between projects'
                                },
                                {
                                    elem: 'action',
                                    content: [
                                        {
                                            block: 'link',
                                            mods: {
                                                color: 'secondary',
                                                hide: 'desktop'
                                            },
                                            tag: 'a',
                                            attrs: {
                                                href: '#'
                                            },
                                            content: [
                                                {
                                                    block: 'arrow',
                                                    mods: {
                                                        color: 'secondary',
                                                        size: 'm',
                                                        state: 'left',
                                                        'indent-r': 'xxxs'
                                                    },
                                                    tag: 'i'
                                                },
                                                {
                                                    tag: 'span',
                                                    content: 'Back'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'button',
                                            tag: 'div',
                                            mods: {
                                                color: 'default'
                                            },
                                            content: [
                                                {
                                                    block: 'burger',
                                                    mix: {
                                                        block: 'button__icon'
                                                    },
                                                    content: [
                                                        {
                                                            elem: 'item',
                                                            tag: 'span'
                                                        },
                                                        {
                                                            elem: 'item',
                                                            tag: 'span'
                                                        },
                                                        {
                                                            elem: 'item',
                                                            tag: 'span'
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'button__text',
                                                    tag: 'span',
                                                    content: 'Show files at r4318347'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'info',
                            mods: {
                                'no-space-b': 'touch'
                            },
                            content: [
                                {
                                    block: 'link',
                                    tag: 'a',
                                    attrs: {
                                        href: '#'
                                    },
                                    content: 's324e8'
                                },
                                ' by ',
                                {
                                    block: 'user',
                                    tag: 'span',
                                    content: 'woodcutter'
                                },
                                ', 4 s ago '
                            ]
                        }
                    ]
                }
            },
            {
                block: 'section',
                mods: {
                    'indent-b': 'm'
                },
                mix: {
                    block: 'editor',
                    mods: {
                        border: 'ghost'
                    }
                },
                content: [
                    {
                        block: 'editor__header',
                        mods: {
                            'space-h': 's',
                            'space-v': 'm',
                            color: 'pale',
                            'border-v': 'ghost'
                        },
                        mix: {
                            block: 'editor__header'
                        },
                        content: [
                            {
                                block: 'editor__header-paragraph',
                                tag: 'p',
                                content: [
                                    {
                                        block: 'editor__M',
                                        mix: {
                                            block: 'text',
                                            mods: {
                                                color: 'purple'
                                            }
                                        },
                                        tag: 'span',
                                        content: 'M'
                                    },
                                    {
                                        block: 'icon',
                                        mods: {
                                            type: 'code',
                                            size: 'xs',
                                            'indent-r': 'xxs'
                                        },
                                        tag: 'span'
                                    },
                                    ' /trunk/arcadia/devtools/intellij/src/main/java/ru/yandex/devtools/intellij/arc/client/ArcCli.java '
                                ]
                            },
                            {
                                block: 'editor__info',
                                content: [
                                    {
                                        block: 'editor__infoitem',
                                        content: [
                                            {
                                                block: 'text',
                                                mods: {
                                                    color: 'success',
                                                    'indent-r': 'm'
                                                },
                                                tag: 'span',
                                                content: '+100'
                                            },
                                            {
                                                block: 'text',
                                                mods: {
                                                    color: 'accented'
                                                },
                                                tag: 'span',
                                                content: '-81'
                                            }
                                        ]
                                    },
                                    {
                                        block: 'editor__infoitem',
                                        mix: {
                                            block: 'icon',
                                            mods: {
                                                size: 's',
                                                type: 'arrow-up'
                                            }
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        block: 'diff-info',
                        mods: {
                            color: 'ghost'
                        },
                        content: [
                            {
                                elem: 'diff',
                                content: '@@ -270, 160  +270, 161 @@'
                            },
                            {
                                elem: 'nav',
                                content: [
                                    {
                                        elem: 'nav-item',
                                        content: ' Below 20 lines '
                                    },
                                    {
                                        elem: 'nav-item',
                                        mods: {
                                            state: 'active'
                                        },
                                        content: ' Above 20 lines '
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        block: 'editor__body',
                        mods: {
                            border: 'collapse'
                        },
                        tag: 'table',
                        content: {
                            tag: 'tbody',
                            content: [
                                {
                                    block: 'editor__row',
                                    tag: 'tr',
                                    content: [
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '1'
                                        },
                                        {
                                            block: 'editor__number',
                                            mods: {
                                                width: 's',
                                                'space-l': 'touch'
                                            },
                                            tag: 'td',
                                            content: '1'
                                        },
                                        {
                                            block: 'editor__line',
                                            tag: 'td',
                                            content: ' package '
                                        }
                                    ]
                                },
                                {
                                    block: 'editor__row',
                                    tag: 'tr',
                                    content: [
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '2'
                                        },
                                        {
                                            block: 'editor__number',
                                            tag: 'td'
                                        },
                                        {
                                            block: 'editor__line',
                                            tag: 'td',
                                            content: ' ru.yandex.devtools.intellij.arc.client; '
                                        }
                                    ]
                                },
                                {
                                    block: 'editor__row',
                                    tag: 'tr',
                                    content: [
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '2'
                                        },
                                        {
                                            block: 'editor__number',
                                            tag: 'td'
                                        },
                                        {
                                            block: 'editor__line',
                                            tag: 'td'
                                        }
                                    ]
                                },
                                {
                                    block: 'editor__row',
                                    mods: {
                                        color: 'added'
                                    },
                                    tag: 'tr',
                                    content: [
                                        {
                                            block: 'editor__number',
                                            tag: 'td'
                                        },
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '3'
                                        },
                                        {
                                            block: 'editor__line',
                                            tag: 'td',
                                            content: [
                                                {
                                                    block: 'text',
                                                    mods: {
                                                        color: 'reserved'
                                                    },
                                                    tag: 'span',
                                                    content: 'import'
                                                },
                                                ' java.util.ArrayList; '
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'editor__row',
                                    mods: {
                                        color: 'added'
                                    },
                                    tag: 'tr',
                                    content: [
                                        {
                                            block: 'editor__number',
                                            tag: 'td'
                                        },
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '4'
                                        },
                                        {
                                            block: 'editor__line',
                                            tag: 'td',
                                            content: [
                                                {
                                                    block: 'text',
                                                    mods: {
                                                        color: 'reserved'
                                                    },
                                                    tag: 'span',
                                                    content: 'import'
                                                },
                                                ' java.util.Collection; '
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'editor__row',
                                    mods: {
                                        color: 'added'
                                    },
                                    tag: 'tr',
                                    content: [
                                        {
                                            block: 'editor__number',
                                            tag: 'td'
                                        },
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '5'
                                        },
                                        {
                                            block: 'editor__line',
                                            tag: 'td',
                                            content: [
                                                {
                                                    block: 'text',
                                                    mods: {
                                                        color: 'reserved'
                                                    },
                                                    tag: 'span',
                                                    content: 'import'
                                                },
                                                ' java.util.List; '
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'editor__row',
                                    mods: {
                                        color: 'added'
                                    },
                                    tag: 'tr',
                                    content: [
                                        {
                                            block: 'editor__number',
                                            tag: 'td'
                                        },
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '6'
                                        },
                                        {
                                            block: 'editor__line',
                                            tag: 'td'
                                        }
                                    ]
                                },
                                {
                                    block: 'editor__row',
                                    tag: 'tr',
                                    content: [
                                        {
                                            block: 'editor__number',
                                            tag: 'td'
                                        },
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '7'
                                        },
                                        {
                                            block: 'editor__line',
                                            tag: 'td',
                                            content: [
                                                {
                                                    block: 'text',
                                                    mods: {
                                                        color: 'reserved'
                                                    },
                                                    tag: 'span',
                                                    content: 'import'
                                                },
                                                {
                                                    block: 'editor__item',
                                                    tag: 'span',
                                                    content: 'com.intellij.openapi.diagnostic.Logger;'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'editor__row',
                                    mods: {
                                        color: 'added'
                                    },
                                    tag: 'tr',
                                    content: [
                                        {
                                            block: 'editor__number',
                                            tag: 'td'
                                        },
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '8'
                                        },
                                        {
                                            block: 'editor__line',
                                            tag: 'td',
                                            content: [
                                                {
                                                    block: 'text',
                                                    mods: {
                                                        color: 'reserved'
                                                    },
                                                    tag: 'span',
                                                    content: 'import'
                                                },
                                                {
                                                    block: 'editor__item',
                                                    tag: 'span',
                                                    content: 'com.intellij.openapi.project.Project;'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'editor__row',
                                    tag: 'tr',
                                    content: [
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '4'
                                        },
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '9'
                                        },
                                        {
                                            block: 'editor__line',
                                            tag: 'td',
                                            content: [
                                                {
                                                    block: 'text',
                                                    mods: {
                                                        color: 'reserved'
                                                    },
                                                    tag: 'span',
                                                    content: 'import'
                                                },
                                                {
                                                    block: 'editor__item',
                                                    tag: 'span',
                                                    content: 'com.intellij.openapi.vcs.filePath;'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'editor__row',
                                    tag: 'tr',
                                    content: [
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '5'
                                        },
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '10'
                                        },
                                        {
                                            block: 'editor__line',
                                            tag: 'td',
                                            content: [
                                                {
                                                    block: 'text',
                                                    mods: {
                                                        color: 'reserved'
                                                    },
                                                    tag: 'span',
                                                    content: 'import'
                                                },
                                                {
                                                    block: 'editor__item',
                                                    tag: 'span',
                                                    content: 'com.intellij.openapi.vcs.VcsException;'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'editor__row',
                                    tag: 'tr',
                                    content: [
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '6'
                                        },
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '11'
                                        },
                                        {
                                            block: 'editor__line',
                                            tag: 'td',
                                            content: [
                                                {
                                                    block: 'text',
                                                    mods: {
                                                        color: 'reserved'
                                                    },
                                                    tag: 'span',
                                                    content: 'import'
                                                },
                                                {
                                                    block: 'editor__item',
                                                    tag: 'span',
                                                    content: 'com.intellij.openapi.vfs.Virtualfile;'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'editor__row',
                                    tag: 'tr',
                                    content: [
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '7'
                                        },
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '12'
                                        },
                                        {
                                            block: 'editor__line',
                                            tag: 'td',
                                            content: [
                                                {
                                                    block: 'text',
                                                    mods: {
                                                        color: 'reserved'
                                                    },
                                                    tag: 'span',
                                                    content: 'import'
                                                },
                                                {
                                                    block: 'editor__item',
                                                    tag: 'span',
                                                    content: 'com.intellij.vcsUtil.VcsUtil;'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'editor__row',
                                    mods: {
                                        color: 'added'
                                    },
                                    tag: 'tr',
                                    content: [
                                        {
                                            block: 'editor__number',
                                            tag: 'td'
                                        },
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '13'
                                        },
                                        {
                                            block: 'editor__line',
                                            tag: 'td',
                                            content: [
                                                {
                                                    block: 'text',
                                                    mods: {
                                                        color: 'reserved'
                                                    },
                                                    tag: 'span',
                                                    content: 'import'
                                                },
                                                {
                                                    block: 'editor__item',
                                                    tag: 'span',
                                                    content: 'org.jetbrains.annotations.NotNull;'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'editor__row',
                                    mods: {
                                        color: 'added'
                                    },
                                    tag: 'tr',
                                    content: [
                                        {
                                            block: 'editor__number',
                                            tag: 'td'
                                        },
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '14'
                                        },
                                        {
                                            block: 'editor__line',
                                            tag: 'td'
                                        }
                                    ]
                                },
                                {
                                    block: 'editor__row',
                                    tag: 'tr',
                                    content: [
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '8'
                                        },
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '15'
                                        },
                                        {
                                            block: 'editor__line',
                                            tag: 'td',
                                            content: [
                                                {
                                                    block: 'text',
                                                    mods: {
                                                        color: 'reserved'
                                                    },
                                                    tag: 'span',
                                                    content: 'import'
                                                },
                                                {
                                                    block: 'editor__item',
                                                    tag: 'span',
                                                    content: 'ru.yandex.devtools.intellij.arc.ArcContext;'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'editor__row',
                                    tag: 'tr',
                                    content: [
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '9'
                                        },
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '16'
                                        },
                                        {
                                            block: 'editor__line',
                                            tag: 'td',
                                            content: [
                                                {
                                                    block: 'text',
                                                    mods: {
                                                        color: 'reserved'
                                                    },
                                                    tag: 'span',
                                                    content: 'import'
                                                },
                                                {
                                                    block: 'editor__item',
                                                    tag: 'span',
                                                    content: 'ru.yandex.devtools.intellij.arc.ArcRevisionnumber;'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'editor__row',
                                    tag: 'tr',
                                    content: [
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '10'
                                        },
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '17'
                                        },
                                        {
                                            block: 'editor__line',
                                            tag: 'td',
                                            content: [
                                                {
                                                    block: 'text',
                                                    mods: {
                                                        color: 'reserved'
                                                    },
                                                    tag: 'span',
                                                    content: 'import'
                                                },
                                                {
                                                    block: 'editor__item',
                                                    tag: 'span',
                                                    content: 'ru.yandex.devtools.intellij.arc.ArcStatus;'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'editor__row',
                                    mods: {
                                        color: 'added'
                                    },
                                    tag: 'tr',
                                    content: [
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '0'
                                        },
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '18'
                                        },
                                        {
                                            block: 'editor__line',
                                            tag: 'td',
                                            content: [
                                                {
                                                    block: 'text',
                                                    mods: {
                                                        color: 'reserved'
                                                    },
                                                    tag: 'span',
                                                    content: 'import'
                                                },
                                                {
                                                    block: 'editor__item',
                                                    tag: 'span',
                                                    content: 'ru.yandex.devtools.intellij.arc.ui.ArcResetDialog;'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'editor__row',
                                    tag: 'tr',
                                    content: [
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '11'
                                        },
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '19'
                                        },
                                        {
                                            block: 'editor__line',
                                            tag: 'td'
                                        }
                                    ]
                                },
                                {
                                    block: 'editor__row',
                                    mods: {
                                        color: 'deleted'
                                    },
                                    tag: 'tr',
                                    content: [
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '12'
                                        },
                                        {
                                            block: 'editor__number',
                                            tag: 'td'
                                        },
                                        {
                                            block: 'editor__line',
                                            tag: 'td',
                                            content: [
                                                {
                                                    block: 'text',
                                                    mods: {
                                                        color: 'reserved'
                                                    },
                                                    tag: 'span',
                                                    content: 'import'
                                                },
                                                ' java.util.ArrayList; '
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'editor__row',
                                    mods: {
                                        color: 'deleted'
                                    },
                                    tag: 'tr',
                                    content: [
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '13'
                                        },
                                        {
                                            block: 'editor__number',
                                            tag: 'td'
                                        },
                                        {
                                            block: 'editor__line',
                                            tag: 'td',
                                            content: [
                                                {
                                                    block: 'text',
                                                    mods: {
                                                        color: 'reserved'
                                                    },
                                                    tag: 'span',
                                                    content: 'import'
                                                },
                                                ' java.util.Collection; '
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'editor__row',
                                    mods: {
                                        color: 'deleted'
                                    },
                                    tag: 'tr',
                                    content: [
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '14'
                                        },
                                        {
                                            block: 'editor__number',
                                            tag: 'td'
                                        },
                                        {
                                            block: 'editor__line',
                                            tag: 'td',
                                            content: [
                                                {
                                                    block: 'text',
                                                    mods: {
                                                        color: 'reserved'
                                                    },
                                                    tag: 'span',
                                                    content: 'import'
                                                },
                                                ' ru.yandex.List; '
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'editor__row',
                                    mods: {
                                        color: 'deleted'
                                    },
                                    tag: 'tr',
                                    content: [
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '15'
                                        },
                                        {
                                            block: 'editor__number',
                                            tag: 'td'
                                        },
                                        {
                                            block: 'editor__line',
                                            tag: 'td'
                                        }
                                    ]
                                },
                                {
                                    block: 'editor__row',
                                    tag: 'tr',
                                    content: [
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '16'
                                        },
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '20'
                                        },
                                        {
                                            block: 'editor__line',
                                            tag: 'td',
                                            content: {
                                                block: 'text',
                                                mods: {
                                                    color: 'diff-comment'
                                                },
                                                tag: 'span',
                                                content: '/**'
                                            }
                                        }
                                    ]
                                },
                                {
                                    block: 'editor__row',
                                    tag: 'tr',
                                    content: [
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '17'
                                        },
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '21'
                                        },
                                        {
                                            block: 'editor__line',
                                            tag: 'td',
                                            content: {
                                                block: 'text',
                                                mods: {
                                                    color: 'diff-comment'
                                                },
                                                cls: 'class=',
                                                tag: 'span',
                                                attrs: {
                                                    'editor-item""': ''
                                                },
                                                content: [
                                                    '&nbsp;* @author Dmitry Andreev ',
                                                    {
                                                        tag: 'a',
                                                        attrs: {
                                                            href: 'mailto:AndreevDm@yandex-team.ru'
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                },
                                {
                                    block: 'editor__row',
                                    tag: 'tr',
                                    content: [
                                        {
                                            block: 'editor__number',
                                            tag: 'td'
                                        },
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '22'
                                        },
                                        {
                                            block: 'editor__line',
                                            tag: 'td',
                                            content: {
                                                block: 'text',
                                                mods: {
                                                    color: 'diff-comment'
                                                },
                                                cls: 'class=',
                                                tag: 'span',
                                                attrs: {
                                                    'editor-item""': ''
                                                },
                                                content: '&nbsp;* @date 11/10/2018'
                                            }
                                        }
                                    ]
                                },
                                {
                                    block: 'editor__row',
                                    tag: 'tr',
                                    content: [
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '18'
                                        },
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '23'
                                        },
                                        {
                                            block: 'editor__line',
                                            tag: 'td',
                                            content: {
                                                block: 'text',
                                                mods: {
                                                    color: 'diff-comment'
                                                },
                                                tag: 'span',
                                                content: '*/'
                                            }
                                        }
                                    ]
                                },
                                {
                                    block: 'editor__row',
                                    tag: 'tr',
                                    content: [
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '19'
                                        },
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '24'
                                        },
                                        {
                                            block: 'editor__line',
                                            tag: 'td',
                                            content: [
                                                {
                                                    block: 'text',
                                                    mods: {
                                                        color: 'reserved'
                                                    },
                                                    tag: 'span',
                                                    content: 'public'
                                                },
                                                {
                                                    block: 'text',
                                                    mods: {
                                                        color: 'diff-accented'
                                                    },
                                                    tag: 'span',
                                                    content: 'ArcCli'
                                                },
                                                '(',
                                                {
                                                    block: 'text',
                                                    mods: {
                                                        color: 'diff-accented'
                                                    },
                                                    mix: {
                                                        block: 'editor__item'
                                                    },
                                                    tag: 'span',
                                                    content: 'String '
                                                },
                                                'arcBinaryPath) { '
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'editor__row',
                                    tag: 'tr',
                                    content: [
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '20'
                                        },
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '25'
                                        },
                                        {
                                            block: 'editor__line',
                                            tag: 'td',
                                            content: {
                                                block: 'editor__item',
                                                mods: {
                                                    'indent-l': '1x'
                                                },
                                                mix: {
                                                    block: 'editor__item'
                                                },
                                                tag: 'span',
                                                content: 'this.arcBinaryPath = arcBinaryPath;'
                                            }
                                        }
                                    ]
                                },
                                {
                                    block: 'editor__row',
                                    tag: 'tr',
                                    content: [
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '21'
                                        },
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '26'
                                        },
                                        {
                                            block: 'editor__line',
                                            tag: 'td',
                                            content: '}'
                                        }
                                    ]
                                },
                                {
                                    block: 'editor__row',
                                    tag: 'tr',
                                    content: [
                                        {
                                            block: 'editor__number',
                                            tag: 'td',
                                            content: '22'
                                        },
                                        {
                                            block: 'editor__number',
                                            mods: {
                                                width: 's',
                                                'space-l': 'touch'
                                            },
                                            tag: 'td',
                                            content: '27'
                                        },
                                        {
                                            block: 'editor__line',
                                            tag: 'td'
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                ]
            },
            {block: 'footer'}
        ]
    };
});
