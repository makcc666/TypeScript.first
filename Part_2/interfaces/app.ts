// Basix
{
    interface User {
        name: string,
        age: number,
        skills: string[],
    }

    interface User_with_role extends User {
        role_id: number,
    }

    let user: User_with_role = {
        name: "Max",
        age: 27,
        skills: [],
        role_id: 1,
    }
    console.log("user::", user);
}

// Наследование
{
    interface User {
        name: string,
        age: number,
        skills: string[],
    }

    interface Role {
        role_id: number,
    }

    interface User_with_role extends User, Role {
    }

    let user: User_with_role = {
        name: "Max",
        age: 27,
        skills: [],
        role_id: 1,
    }
    console.log("user::", user);
}


{
    interface User {
        name: string,
        age: number,
        skills: string[],
    }

    interface Role {
        role_id: number,
    }

    interface User_with_role extends User, Role {
        created_at: Date,
    }

    let user: User_with_role = {
        name: "Max",
        age: 27,
        skills: [],
        role_id: 1,
        created_at: new Date(),

    }
    console.log("user::", user);
}

// Наследование + расширение
{
    interface User {
        name: string,
        age: number,
        skills: string[],
    }

    interface Role {
        role_id: number,
    }

    interface User_with_role extends User, Role {
        created_at: Date,
    }

    let user: User_with_role = {
        name: "Max",
        age: 27,
        skills: [],
        role_id: 1,
        created_at: new Date(),

    }
    console.log("user::", user);
}

// Описание функций
{
    interface User {
        name: string,
        age: number,
        skills: string[],

        log: (id: number) => string,
    }


    interface Role {
        role_id: number,
    }

    interface User_with_role extends User, Role {
        created_at: Date,
    }

    let user: User_with_role = {
        name: "Max",
        age: 27,
        skills: [],
        role_id: 1,
        created_at: new Date(),

        log: (id) => `ID is "${id}"`

    }
    console.log("user::", user);
}

// Словарь - описание неограниченного кол-ва ключей
{
    interface User {
        name: string,
        age: number,
        skills: string[],
    }

    interface User_list {
        [index: number]: User,
    }

    let user: User = {
        name: "Max",
        age: 27,
        skills: [],
    }

    let users_in_ban: User_list = [
        {
            name: "Gan",
            age: 22,
            skills: [],
        },
        {
            name: "Chet",
            age: 15,
            skills: [],
        }
    ];

    interface User_by_keys {
        list: {
            [index: string]: User,
        },
        sort: "desc" | "asc",
    }

    let users_by_roles: User_by_keys = {
        sort: "desc",
        list: {
            moder: {
                name: "Gan",
                age: 22,
                skills: [],
            },
            guest: {
                name: "Chet",
                age: 15,
                skills: [],
            },
        }
    }


    console.log("user::", user);
}
