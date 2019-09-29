class UserView extends View {
    render({user}) {
        return `
        <div class = "user-view">${user.name}</div>
        <input class="user-input" value="${user.name}">
        `;
    }
}
