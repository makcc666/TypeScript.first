/**
 * Приведение одного типа в другой, должно происходить через спец (свою, системную) функцию.
 * Исключением являются примитивы
 */

// Приведение примитива
{
    let a = 5;
    let b: string = a.toString();

    let c = "123125125 saf";
    let d: number = parseInt(c);
}

{
    interface User {
        name: string,
        login: string,
        email: string,
    }

    const user: User = {
        name: "Ursa",
        email: "ursa2000@u.u",
        login: "ursa2000",
    }

    interface Admin {
        name: string,
        role: number,
    }


    // Bad practice
    // Оставит лишние свойства. В TS их будет не видно, но в RUN JS, они будут. Неявное поведение
    {
        const admin__v1: Admin = {
            ...user,
            role: 5,
        };
    }

    // Bad practice
    // Всё ещё остались лишние свойства, которые не видны в TS.
    {
        interface Admin_short {
            name: string,
        }

        const admin__v2: Admin_short = user;
    }

    // Nice
    {
        const user_to_admin = (user: User): Admin => {
            return {
                name: user.name,
                role: 5,
            }
        }

        const admin__v3 = user_to_admin(user);
        console.log("admin role IS:", admin__v3.role);
    }
}