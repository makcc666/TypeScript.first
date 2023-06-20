class User {
	constructor(public id: number, public name: string) {
	}

}

function getData(id: number): User {
	return new User(155, "Ursa");
}

type RT = ReturnType<typeof getData>;
type RT2 = ReturnType<()=>void>; // void
type RT3 = ReturnType<<T>()=>T>; // unknown
type RT4 = ReturnType<<T extends string>()=>T>; // string

type PT = Parameters<typeof getData>; // Типы аргументов
type PTFirst = PT[0]; // Первый аргумент

type CP = ConstructorParameters<typeof User>; // Parameters из конструктора класса
type IT = InstanceType<typeof User>; // Класс


