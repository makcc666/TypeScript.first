{
    class User {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    // bad practices
    class Users extends Array<User> {
        searchByName(name: string) {
            return this.filter(user => user.name === name)
        }
    }

    const users = new Users();
    users.push(new User("Ursa"));
    users.push(new User("Faop"));
    console.log(
        "users search::",
        users.searchByName("Ursa")
    );
    console.log(users.toString());
    console.log("users 'this'::",users);


    // Композиция
    // Так не попадают излишние для бизнес логики методы от Array (shift, toString, etc)
    class UserList {
        users:User[]=[];

        push(u:User){
            this.users.push(u);
        }
    }

    const userList = new UserList();
    userList.push(new User("Ursa"));
    userList.push(new User("Faop"));
    console.log("userList::",userList.users);



    class Payment {
        date:Date;
    }
    // bad practices
    class UserWithPayment extends Payment{
        name:string
    }

    /**
     * Композиция
     * Не пересекаются домены (сущности).
     * Жёсткое связывание усложняет, нагромождает код. Больше конфликт свойств, методов
     */
    class UserWithPayment2 {
        user:User;
        payment:Payment;

        constructor(user:User,payment:Payment) {
            this.user = user;
            this.payment = payment;
        }
    }
}