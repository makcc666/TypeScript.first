class User {
    name: string;
    age: number;

    constructor();
    constructor(age: number);
    constructor(name: string, age: number);
    constructor(name: string);

    // Основной конструктор. Должен поддерживать все выше объявленные варианты конструктора
    constructor(name_or_age?: string | number, age?: number) {
        switch (typeof name_or_age) {
            case "string": {
                this.name = name_or_age;
                break
            }
            case "number": {
                this.age = name_or_age
                break;
            }
            default: {
                let _: never;
                throw new Error("Unsupported typeof");
            }
        }

        // Это пиздец
        if (typeof age === "number") {
            this.age = age;
        }
    }
}

const user = new User("Ursa");
const user__empty = new User();

