// Избавление от сложностей в Literal
{
    type http_method = "post" | "get";
    const fetch_with_auth = (url: string, type: http_method) => {
        console.log("URL and TYPE", {url, type});
        return `type:${type}`;
    }

    let method: http_method = "get";
    fetch_with_auth("/some_url", method); // =>"type:get"
    fetch_with_auth("/some_url", "post"); // =>"type:post"
}

// Составные типы (intersection)
{
    type User = {
        name: string,
        age: number,
        skills: string[],
    }

    type Role = {
        id: number,
    }

    // Так-же можно "User | Role"
    // "option" будет перезаписан из Role
    type User_with_role = User & Role;

    let user_simple: User = {
        name: "Max",
        age: 27,
        skills: ["js", "nodejs", "shared_object", "head"],
    }

    let user_full: User_with_role = {
        name: "Max",
        age: 27,
        skills: [],
        id: 0,
    }

    // Композит
    type User_with_Role__v2 = {
        user: User,
        role: Role,
    }
    let user_full__v2: User_with_Role__v2 = {
        user: {
            name: "Max",
            age: 27,
            skills: ["js", "nodejs", "shared_object", "head"],
        },
        role: {
            id: 0,
        },
    }
}