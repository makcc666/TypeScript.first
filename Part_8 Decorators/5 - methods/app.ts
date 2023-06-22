{
	interface IUserService {
		users: number;

		getUsersInDatabase(): number
	}

	class UserService implements IUserService {
		users: number = 1000;

		@Log
		getUsersInDatabase(): number {
			throw new Error("Ошибка");
		}
	}

	type TypedFullPropertyDescriptor = TypedPropertyDescriptor<(...args: any[]) => any>;

	function Log(
		target: Object,
		propertyKey: string | symbol,
		descriptor: TypedFullPropertyDescriptor
	): TypedFullPropertyDescriptor | void {
		const oldValue = descriptor.value;
		descriptor.value = function () {
			/*
			const self = this as UserService;
			console.log("users count::",self.users);
			*/
			console.log("no error");
			if (typeof oldValue === "function") oldValue();
		}
	}

	console.log(new UserService().getUsersInDatabase());
}