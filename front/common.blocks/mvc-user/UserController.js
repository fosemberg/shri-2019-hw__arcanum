class UserController {
    constructor(userModel, userView) {
        userView.onChange(event => {
            userModel.setState({name: event.target.value});
        })

    }
}
