const skill: [number, string] = [1, "Dev"];


const arr: [number, string, ...boolean[]] = [1, "some_string", false, true, false,];


// Eq
{
    const arr_first: [number, string, boolean, boolean, boolean] = [1, "some_string", false, true, false,];
    const arr_second: [number, string, ...[boolean, boolean, boolean]] = [1, "some_string", false, true, false,];
    // arr_first === arr_second
}