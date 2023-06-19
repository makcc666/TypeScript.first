{
    let some: number | string;
    if (Math.random() >= 0.5) {
        some = 1;
    } else {
        some = "str";
    }

    let some2: typeof some;
}

{
    const user = {
        name: "Ursa",
        age:23,
    }

    // Получаем ключи и типа, сгенерированного из переменной "user";
    type KeysOfUser = keyof typeof user;
    // type KeysOfUser = keyof user; // ERROR! keyof не может работать с объектами
    const fieldName: KeysOfUser = "name"; // "name" | "age

    enum Direction {
        UP,
        DOWN,
    }
    type PossibleMove = keyof typeof Direction; // Преобразовываем Direction в тип
    const choseMove:PossibleMove = "UP" // UP | DOWN
}