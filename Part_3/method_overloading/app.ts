class User {
    private _login: string;
    private _password: string;

    set login(value: string) {
        this._login = `user-${value}`;
    }

    get login() {
        return this._login;
    }

}

const user = new User();
user.login = "Ursa";
console.log("user.login::",user.login);
