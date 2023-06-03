"use strict";
const skill = [1, "Dev"];
const arr = [1, "some_string", false, true, false,];
// Eq
{
    const arr_first = [1, "some_string", false, true, false,];
    const arr_second = [1, "some_string", false, true, false,];
    // arr_first === arr_second
}
// ReadOnly
{
    {
        const skill = [1, "Dev"];
    }
    // Eq, generic
    {
        const skill__like_generic = ["First", "Second"];
        const skill__not_like_generic = ["First", "Second"];
        const skill__like_generic__readonly = ["First", "Second"];
    }
    // Не работает, можно перезаписывать
    {
        const arr = [1, "some_string", false, true, false,];
        arr[0] = 1;
        arr[2] = false;
        console.log("arr::", arr);
    }
}
