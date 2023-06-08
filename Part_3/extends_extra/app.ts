{
    class User {
        name: string = "user";

        constructor() {
            console.log("User name is::", this.name);
        }
    }

    //
    class Admin extends User {
        id: number;

        constructor(name: string) {
            // this.name = name; // Ошибка. Работа со свойствами должна быть после вызова SUPER

            super();
            this.name = name;
            this.id = Math.random();

            console.log("Admin name is::", this.name);

        }
    }

    const admin = new Admin("Ursa");
    console.log("admin id::",admin.id);
}