block('header')(
    content()(
        function () {
            return [
                {
                    elem: 'logo',
                },
                {
                    elem: 'select',
                    mix: {
                        block: 'select'
                    },
                    mods: {
                        size: 'small'
                    },
                    content: [
                        {
                            block: 'select__name',
                            mods: {
                                weight: 'bold'
                            },
                            tag: 'span',
                            content: 'Repository'
                        },
                        ' Arc ',
                        {
                            block: 'select__arrow',
                            mods: {
                                position: 'center'
                            },
                            mix: {
                                block: 'arrow',
                                mods: {
                                    state: 'down'
                                }
                            },
                            tag: 'i'
                        }
                    ]
                }
            ]
        }
    )
)
