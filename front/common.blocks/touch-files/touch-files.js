class TouchFiles extends View {
    render({searchQuery, files}) {
        return files
            .filter(file => Object.values(file)
                .filter(el => ~el.indexOf(searchQuery))
                .length !== 0
            )
            .reduce((accum, {
                fileType,
                name,
                lastCommit,
                commitMessage,
                committer,
                updated
            }) => `${accum}
        <div class="git-log-row git-log-row_hide_desktop git-log-row_border_bottom git-log-row_padding_both">
            <div class="git-log-row__item git-log-row__item_padding_both">
                <div class="file file_type_${fileType}">
                    <div class="file__icon file__icon_type_${fileType}"></div>
                    ${name}
                </div>
            </div>
            <div class="git-log-row__item git-log-row__item_display_flex git-log-row__item_padding_both"><span
                class="git-log-row__message">${commitMessage}</span></div>
            <div class="git-log-row__item git-log-row__item_padding_both"><a class="link link__control" href="#" role="link" tabindex="0">${lastCommit}</a> by ${committer}, ${updated}
            </div>
            <i class="git-log-row__arrow arrow arrow_state_right arrow_color_faded arrow_size_l"></i>
        </div>
        `, '')
    }
}

new TouchFiles(document.querySelector(`.touch-files`), store);
