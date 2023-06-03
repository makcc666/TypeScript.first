// Можно задавать список вариаций. Сасный сахар заставляет любить TypeScript
{
    let a: 1 | 2 | string = 1;
    a = 1;
    a = 2;
    a = "asf";
}

{
    const fetch_with_auth = (url: string, type: "get" | "post"): "is_POST" | "is_GET" => {
        console.log("URL and TYPE", {url, type});

        return type === "post" ? "is_POST" : "is_GET";
    }
    fetch_with_auth("/some_url/", "post") // => "is_POST"
}

// Сложности при передаче в виде переменной
{
    const fetch_with_auth = (url: string, type: "get" | "post") => {
        console.log("URL and TYPE", {url, type});
    }
    let method = "post";

    /** Ошибка. В функции ожидается тип "get"\"post", а передаётся STRING */
    // fetch_with_auth("/some_url/", method)

    // Костыль. Плохая практика
    fetch_with_auth("/some_url/", method as "post");
    let _method_hack = "another_method";
    fetch_with_auth("/some_url/", _method_hack as "post"); // Будет работать неявно. Из-за этого, считается плохой практикой использовать "AS"

    // С константами такой проблемы нет
    const _method_constanta = "post";
    fetch_with_auth("/some_url/", _method_constanta);

}