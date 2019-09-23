var page = '1-5-file-details'
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
                content: [
                    {
                        block: 'bread-crumbs',
                        mods: {
                            'border-b': true
                        },
                        content: 'arcadia/trunk/arcadia/arcanum'
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
                                        mods: {
                                            state: 'active'
                                        },
                                        content: 'details'
                                    },
                                    {
                                        block: 'tabs__item',
                                        content: 'history'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                block: 'section',
                mods: {
                    'indent-t': 'm',
                    'indent-b': 'm'
                },
                mix: {
                    block: 'editor',
                    mods: {
                        border: 'faded'
                    }
                },
                content: [
                    {
                        block: 'editor__header',
                        mods: {
                            color: 'default',
                            'space-h': 'm',
                            'space-v': 's'
                        },
                        content: [
                            {
                                block: 'editor__header-item',
                                content: [
                                    {
                                        block: 'file',
                                        tag: 'span',
                                        content: [
                                            {
                                                block: 'file__icon',
                                                mods: {
                                                    type: 'code'
                                                }
                                            },
                                            ' ya.make '
                                        ]
                                    },
                                    {
                                        block: 'editor__byte-count',
                                        tag: 'span',
                                        content: '(4 347 bytes)'
                                    }
                                ]
                            },
                            {
                                block: 'editor__header-item',
                                content: {
                                    block: 'editor__action'
                                }
                            }
                        ]
                    },
                    {
                        block: 'editor__body',
                        mods: {
                            color: 'main'
                        },
                        tag: 'table',
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
                                        block: 'editor__line',
                                        tag: 'td',
                                        content: {
                                            block: 'editor__item',
                                            mods: {
                                                color: 'comment'
                                            },
                                            tag: 'span',
                                            content: '#!/usr/bin/env python'
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
                                        content: '2'
                                    },
                                    {
                                        block: 'editor__line',
                                        tag: 'td',
                                        content: [
                                            {
                                                block: 'editor__item',
                                                mods: {
                                                    weight: 'bold'
                                                },
                                                tag: 'span',
                                                content: 'import'
                                            },
                                            ' os '
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
                                        content: '3'
                                    },
                                    {
                                        block: 'editor__line',
                                        tag: 'td',
                                        content: [
                                            {
                                                block: 'editor__item',
                                                mods: {
                                                    weight: 'bold'
                                                },
                                                tag: 'span',
                                                content: 'import'
                                            },
                                            ' sys '
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
                                        block: 'editor__line',
                                        tag: 'td',
                                        content: [
                                            {
                                                block: 'editor__item',
                                                mods: {
                                                    weight: 'bold'
                                                },
                                                tag: 'span',
                                                content: 'import'
                                            },
                                            ' platform '
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
                                        block: 'editor__line',
                                        tag: 'td',
                                        content: [
                                            {
                                                block: 'editor__item',
                                                mods: {
                                                    weight: 'bold'
                                                },
                                                tag: 'span',
                                                content: 'import'
                                            },
                                            ' json '
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
                                        content: '7'
                                    },
                                    {
                                        block: 'editor__line',
                                        tag: 'td',
                                        content: [
                                            ' URLS = [',
                                            {
                                                block: 'editor__item',
                                                mods: {
                                                    color: 'link'
                                                },
                                                tag: 'span',
                                                content: '\'https://proxy.sandbox.yandex-team.ru/453818264\''
                                            },
                                            ' , ',
                                            {
                                                block: 'editor__item',
                                                mods: {
                                                    color: 'link'
                                                },
                                                tag: 'span',
                                                content: '\'http://storage-int.mds.yandex.net/get-sandbox/110738/by_platform.json.453815347\''
                                            },
                                            '] '
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
                                        content: '8'
                                    },
                                    {
                                        block: 'editor__line',
                                        tag: 'td',
                                        content: [
                                            ' MD5 = ',
                                            {
                                                block: 'editor__item',
                                                mods: {
                                                    color: 'link'
                                                },
                                                tag: 'span',
                                                content: '\'7f5a85f9c28d35c3a76d8cea7af51106\''
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
                                        content: '10'
                                    },
                                    {
                                        block: 'editor__line',
                                        tag: 'td',
                                        content: 'RETRIES = 5'
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
                                        block: 'editor__line',
                                        tag: 'td',
                                        content: 'HASH_PREFIX = 10'
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
                                        content: '12'
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
                                        content: '13'
                                    },
                                    {
                                        block: 'editor__line',
                                        tag: 'td',
                                        content: 'HOME_DIR = os.path.expanduser(\'~\')'
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
                                        content: '15'
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
                                        block: 'editor__line',
                                        tag: 'td',
                                        content: [
                                            {
                                                block: 'editor__item',
                                                mods: {
                                                    weight: 'bold'
                                                },
                                                tag: 'span',
                                                content: 'def '
                                            },
                                            {
                                                block: 'editor__item',
                                                mods: {
                                                    weight: 'bold',
                                                    color: 'link'
                                                },
                                                tag: 'span',
                                                content: 'create_dirs'
                                            },
                                            '(path): '
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
                                        content: '17'
                                    },
                                    {
                                        block: 'editor__line',
                                        tag: 'td',
                                        content: {
                                            block: 'editor__item',
                                            mods: {
                                                weight: 'bold',
                                                'indent-l': '1x'
                                            },
                                            tag: 'span',
                                            content: 'try:'
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
                                        block: 'editor__line',
                                        tag: 'td',
                                        content: {
                                            block: 'editor__item',
                                            mods: {
                                                'indent-l': '2x'
                                            },
                                            tag: 'span',
                                            content: 'os.makedirs(path)'
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
                                        block: 'editor__line',
                                        tag: 'td',
                                        content: [
                                            {
                                                block: 'editor__item',
                                                mods: {
                                                    weight: 'bold',
                                                    'indent-l': '1x'
                                                },
                                                tag: 'span',
                                                content: 'except '
                                            },
                                            'OSError ',
                                            {
                                                block: 'editor__item',
                                                mods: {
                                                    weight: 'bold'
                                                },
                                                tag: 'span',
                                                content: ' as '
                                            },
                                            'e: '
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
                                        block: 'editor__line',
                                        tag: 'td',
                                        content: [
                                            {
                                                block: 'editor__item',
                                                mods: {
                                                    'indent-l': '2x',
                                                    weight: 'bold'
                                                },
                                                tag: 'span',
                                                content: 'import'
                                            },
                                            ' errno '
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
                                        content: '21'
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
                                        content: '22'
                                    },
                                    {
                                        block: 'editor__line',
                                        tag: 'td',
                                        content: [
                                            {
                                                block: 'editor__item',
                                                mods: {
                                                    'indent-l': '2x',
                                                    weight: 'bold'
                                                },
                                                tag: 'span',
                                                content: 'if'
                                            },
                                            ' e.errno != errno.EEXIST: '
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
                                        content: '23'
                                    },
                                    {
                                        block: 'editor__line',
                                        tag: 'td',
                                        content: {
                                            block: 'editor__item',
                                            mods: {
                                                'indent-l': '3x',
                                                weight: 'bold'
                                            },
                                            tag: 'span',
                                            content: 'raise'
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
                                        content: '24'
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
                                        content: '25'
                                    },
                                    {
                                        block: 'editor__line',
                                        tag: 'td',
                                        content: [
                                            {
                                                block: 'editor__item',
                                                mods: {
                                                    weight: 'bold',
                                                    'indent-l': '1x'
                                                },
                                                tag: 'span',
                                                content: 'return '
                                            },
                                            'path '
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
                                        content: '26'
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
                                        content: '27'
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
                                        content: '28'
                                    },
                                    {
                                        block: 'editor__line',
                                        tag: 'td',
                                        content: [
                                            {
                                                block: 'editor__item',
                                                mods: {
                                                    weight: 'bold'
                                                },
                                                tag: 'span',
                                                content: 'def '
                                            },
                                            {
                                                block: 'editor__item',
                                                mods: {
                                                    weight: 'bold',
                                                    color: 'link'
                                                },
                                                tag: 'span',
                                                content: 'misc_root'
                                            },
                                            '(): '
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
                                        content: '29'
                                    },
                                    {
                                        block: 'editor__line',
                                        tag: 'td',
                                        content: [
                                            {
                                                block: 'editor__item',
                                                mods: {
                                                    weight: 'bold',
                                                    'indent-l': '1x'
                                                },
                                                tag: 'span',
                                                content: 'return '
                                            },
                                            'create_dirs(os.getenv( ',
                                            {
                                                block: 'editor__item',
                                                mods: {
                                                    color: 'link'
                                                },
                                                tag: 'span',
                                                content: '\'YA_CACHE_DIR\''
                                            },
                                            ' ) ',
                                            {
                                                block: 'editor__item',
                                                mods: {
                                                    weight: 'bold'
                                                },
                                                tag: 'span',
                                                content: 'or'
                                            },
                                            ' os.path.join(HOME_DIR  , ',
                                            {
                                                block: 'editor__item',
                                                mods: {
                                                    color: 'link'
                                                },
                                                tag: 'span',
                                                content: '\'.ya\''
                                            },
                                            ')) '
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
                                        content: '30'
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
                                        content: '31'
                                    },
                                    {
                                        block: 'editor__line',
                                        tag: 'td'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {block: 'footer'}
        ]
    };
});
