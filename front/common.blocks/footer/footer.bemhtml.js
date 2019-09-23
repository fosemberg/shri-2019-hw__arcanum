block('footer')(
    content()(
        function () {
            return [
                {
                    elem: 'item',
                    mix: {
                        block: 'footer__caption'
                    },
                    content: ' Trade secrets of Yandex LLC. 16, Lev Tolstoy Str.,Moscow, Russia, 119021 '
                },
                {
                    elem: 'item',
                    content: [
                        {
                            elem: 'version',
                            content: 'UI: 0.1.15'
                        },
                        {
                            elem: 'copyright',
                            content: [
                                ' © 2007—2019 ',
                                {
                                    block: 'link',
                                    tag: 'a',
                                    attrs: {
                                        href: 'https://www.yandex.ru',
                                        target: '_blank'
                                    },
                                    content: 'Yandex'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    )
)
