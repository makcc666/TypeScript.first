function Uni(name: string): Function {
	console.log(`Инициализация: ${name}`);
	return function () {
		console.log(`Вызов: ${name}`);
	}
}

{
	@Uni('Класс')
	class MyClass {

		@Uni('Свойство')
		props?:any;
		@Uni('Метод')
		method(@Uni('Параметр метода') _: any) {

		}

		@Uni('Свойство 2')
		props2?:any;

		constructor(@Uni('Параметр конструктора') _: any) {
		}


		@Uni('Метод static')
		static method(@Uni('Параметр метода static') _: any) {

		}
		@Uni('Свойство static')
		static props?:any;



	}
}