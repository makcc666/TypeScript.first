/**
 * Логично дополнение к native JS.
 * NULL - прямое указание, что ожидаемого объекта нет.
 */
interface User {
    name: string,
    id: number,
    login: string,
}

const user_fetch = () => {
    // Имитируем поиск несуществующего пользователя
    if (Math.random() > 0.5) return null;

    return {
        name: "Ursa",
        id: 15019,
        login: "ursa2000",
    } as User;
}

const user_from_fetch = user_fetch();
if (user_from_fetch === null) throw "User not found";
console.log("User ID is:", user_from_fetch.id);``