// Default UNION
{
// Принимает STRONG, NUMBER, BOOLEAN
    const log_id = (id: string | number | boolean) => {
        console.log("log_id::id::", id);
    }
    log_id(402);
    log_id("some_string");
    log_id(false);
}

// Сужение типов. Работает в RUN-TIME (IF ELSE \ SWITCH
{
    const log_id = (id: string | number | boolean) => {

        // TypeScript автоматически понимает, что переменная будет STRING
        if (typeof id === "string") {
            id = id.toLowerCase();
        }

        // Тоже самое с SWITCH
        switch (typeof id) {
            case "number": {
                id += 10000;
                break;
            }
        }

        console.log("log_id::id::", id);
    }
    log_id(402);
    log_id("some_string");
    log_id(false);
}

// Разное поведение для массивов и строковых
{
    const log_error = (err: string | string[]) => {
        if (typeof err === "string") err = [err];

        console.log("log_error::ARRAY::", err);
    }

    log_error("some_error");
    log_error(["First error", "Another error"]);
}

// Разное поведение у объекта. Принимает либо "a", либо "b"
{
    const log_object = (obj: { a: number } | { b: number }) => {
        let prefix: string = "Undef";
        let value: number;
        if ("a" in obj) {
            prefix = "A is";
            value = obj.a;
        } else {
            prefix = "B is";
            value = obj.b;
        }

        console.log(prefix, value);
    }

    log_object({a:1111}); // => "A is 1111"
    log_object({b:123}); // => "B is 123"
    log_object({b:444,a:1}); // => "A is 1", идёт порядок по сортировке ключей
}