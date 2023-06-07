class User {
     name: string

    constructor(name: string) {
        this.name = name;
    }
}

const user = new User("Ursa");
console.log("User is::",user.name);
user.name = "Not-Ursa";
console.log("User is::",user.name);


class Admin {
    role: number // Для этого нужно в tsconfig изменить "strictPropertyInitialization" на false
    // role!: number // Можно и так, тогда не нужно менять tsconfig
}

const admin = new Admin();
admin.role = 1;