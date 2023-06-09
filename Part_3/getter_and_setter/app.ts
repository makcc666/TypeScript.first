{
    class User {
        _login: string ;
        _password: string ;

        set login(value: string) {
            this._login = `user-${value}`;
        }

        get login(): string {
            return this._login;
        }

    }

    const user = new User();
    user.login = "Ursa";
    console.log("user.login::", user.login);

}