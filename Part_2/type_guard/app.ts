/**
 * Type Guard.
 * Логика, построенная на BOOLEAN, для уточнения (сужения типа) переменой.
 */

const is_string = (value: string | number): value is string => {
    return typeof value === "string";
}

interface User {
    name: string,
    id: number,
}

interface Admin {
    role: number,
}

const is_Admin = (user: User | Admin): user is Admin => {
    return "role" in user;
}


const set_role_to_admin = (user: User | Admin) => {
    if (is_Admin(user) !== true) throw new Error("User must be Admin");

    /**
     * Вот тут TS не поймёт, что "user" является Admin.
     * Нужно делать именно в IF\ELSE
     */
    //user.role

    if (is_Admin(user)){
        user.role=0;
    }
    throw new Error("User must be Admin");
}