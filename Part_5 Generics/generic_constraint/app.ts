{

    class Vehicle {
        constructor(public run: number) {
        }
    }

    // Оставляем функцию универсальной, но задаём ограничения
    // Обязывает, чтобы generic имел тот-же набор свойств (а так-же методов), что и класс Vehicle. Love TS
    function kmToMiles<T extends Vehicle>(vehicle: T): T {
        vehicle.run = vehicle.run / 0.62;
        return vehicle;
    }

    class LCV extends Vehicle {
        capacity: number = 0;
    }

    const vehicle = kmToMiles(new Vehicle(122))
    const vehicle2 = kmToMiles(new LCV(122))
    const vehicle3 = {run: 122};
}

// Аналогично
{

    class Vehicle {
        run: number = 0;
    }

    // Оставляем функцию универсальной, но задаём ограничения
    // Обязывает, чтобы generic имел тот-же набор свойств (а так-же методов), что и класс Vehicle. Love TS
    function kmToMiles<T extends Vehicle>(vehicle: T): T {
        vehicle.run = vehicle.run / 0.62;
        return vehicle;
    }

    class LCV extends Vehicle {
        capacity: number = 0;
    }

    const vehicle = kmToMiles(new Vehicle())
    const vehicle2 = kmToMiles(new LCV())
    const vehicle3 = kmToMiles({run: 0});
}

// Аналогично, но нельзя вызвать instance
{

    interface Vehicle {
        run: number;
    }

    // Оставляем функцию универсальной, но задаём ограничения
    // Обязывает, чтобы generic имел тот-же набор свойств (а так-же методов), что и класс Vehicle. Love TS
    function kmToMiles<T extends Vehicle>(vehicle: T): T {
        vehicle.run = vehicle.run / 0.62;
        return vehicle;
    }

    interface LCV extends Vehicle {
        capacity: number;
    }

    // const vehicle = kmToMiles(new Vehicle())
    // const vehicle2 = kmToMiles(new LCV())
    const vehicle3 = kmToMiles({run: 0});
}

// Пример с передачей типов
{
    function logId<T extends string | number>(id: T): T {
        console.log("logId::", id);
        return id;
    }

    const resLogIdString = logId("someString"); // TS обозначит переменную, как string, со значением "someString"
    const resLogIdNumber = logId(501);// TS обозначит переменную, как number, со значением "501"

    function logIdPro<T extends string | number, Y extends number[]>(id: T, extraData: Y): {
        id: T,
        data: Y
    } {
        console.log("logId::", id);
        console.log("ExtraData::", extraData);
        return {
            id,
            data: extraData,
        };
    }

    const resLogIdPro = logIdPro("someId", [1, 2, 3, 4]); // => {data:number[], id:"someId"}
}