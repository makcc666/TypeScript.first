{
	interface IUserService {
		users: number;

		getUsersInDatabase(): number
	}

	class UserService implements IUserService {
		@Max(100)
		users: number = 5;

		getUsersInDatabase(): number {
			return this.users
		}

	}


	const userService = new UserService();
	console.log(userService.getUsersInDatabase());
	userService.users = 1000;
	console.log(userService.getUsersInDatabase());

}

function Max(max: number) {
	return function (
		target: Object,
		propertyKey: string | symbol,
	) {
		let value: number;
		console.log("decorator 'Max' init");
		const setter = function (newValue: number) {
			console.log("Max::setter")
			if (newValue > max) {
				console.log(`Нельзя задать больше значения ${max}`);
				return;
			}
			value = newValue;
		}
		const getter = function () {
			console.log("Max::getter")

			return value;
		}

		Object.defineProperty(target, propertyKey, {
			set: setter,
			get: getter,
		});
		console.log("::target",target)
	}
}
