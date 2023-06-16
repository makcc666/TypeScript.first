{
    interface IUser {
        name: string;
        age: number;
    }

    type KeysOfUser = keyof IUser;
    // Устанавливает ограничения на значения. Могут быть только ключами, описанными в интерфейсе IUser
    const resKeysFromUsers: KeysOfUser = "age";

}

{
    interface IUser {
        name: string;
        age: number;
    }

    function getValue<T, K extends keyof T>(obj: T, key: K) {
        return obj[key];
    }

    const user: IUser = {
        name: "Ursa",
        age: 45,
    }
    const userName = getValue(user, "name");
    // const userPhone = getValue(user, "phone"); // ERROR! TS знает, что нет такого ключа. Ибо они описаны в объекте "user", у которой интерфейс от "IUser"
}