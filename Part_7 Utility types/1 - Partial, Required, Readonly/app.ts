{
	interface User {
		name:string;
		age?:number;
		email:string
	}

	type partial = Partial<User>;
	const p:partial = {}; // Необходима осторожность. В этом случае, подойдёт даже пустой объект

	type required = Required<User>; // Все поля обязательные
	type readonly = Readonly<User>; // Поля доступны только для считывания
	type requiredAndReadonly = Required<Readonly<User>>; // Все поля обязательны и доступны только для чтения
}