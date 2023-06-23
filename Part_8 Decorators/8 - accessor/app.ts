{
	interface IUserService {
		users: number;

		getUsersInDatabase(): number
	}

	class UserService implements IUserService {
		private _users: number;

		@Log()
		set users(value: number) {
			console.log("UserService::set users::", value);
			this._users = value;
			console.log("UserService::set users2::", this._users);

		}

		get users() {
			return this._users;
		}

		getUsersInDatabase(): number {
			throw new Error("Ошибка")
		}

	}


	const userService = new UserService();
	userService.users = 1;
	userService.users = 123;
	console.log(userService.users);

}

function Log() {
	return function (
		target: Object,
		propertyKey: string | symbol,
		descriptor: PropertyDescriptor
	) {
		const oldSet = descriptor.set;
		descriptor.set = (...args: any) => {
			oldSet?.apply(target, args);
		}

	}
}
