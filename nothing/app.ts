const user = {
    first: "First",
    second: "Second",
    age: 123,
    city: "Default",
    contacts: {
        phone: "+79854",
        email: "asd@ssasf.rr",
        is_empty: false,
    },
}

let user_interface: {
    first: string,
    second: string,
    age: number,
    city: string,
    contacts: {
        phone: string,
        email: string,
        is_empty: boolean,
    },
} = user;

const get_full_name = (userObj: { first: string, second: string }): string => {
    return `${userObj.first} ${userObj.second}`
}

console.log(
    get_full_name(user),
)