"use strict";
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
};
let user_interface = user;
const get_full_name = (userObj) => {
    return `${userObj.first} ${userObj.second}`;
};
console.log(get_full_name(user));
