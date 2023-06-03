const skill: [number, string] = [1, "Dev"];


const arr: [number, string, ...boolean[]] = [1, "some_string", false, true, false,];


// Eq
{
    const arr_first: [number, string, boolean, boolean, boolean] = [1, "some_string", false, true, false,];
    const arr_second: [number, string, ...[boolean, boolean, boolean]] = [1, "some_string", false, true, false,];
    // arr_first === arr_second
}


// ReadOnly
{
    {
        const skill: readonly [number, string] = [1, "Dev"];

    }

    // Eq, generic
    {
        const skill__like_generic: Array<string> = ["First", "Second"];
        const skill__not_like_generic: string[] = ["First", "Second"];
        const skill__like_generic__readonly: ReadonlyArray<string> = ["First", "Second"];

    }


    // Не работает, можно перезаписывать
    {
        const arr: [number, string, ...readonly boolean[]] = [1, "some_string", false, true, false,];
        arr[0] = 1;
        arr[2] = false;

        console.log("arr::", arr);
    }

}

