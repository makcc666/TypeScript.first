{
	interface IUserService {
		users: number;

		getUsers(): number
	}

	@changeUsersCountStatic
		// @nullUser
	class UserService implements IUserService {
		users: number = 1000;

		getUsers(): number {
			return this.users;
		}
	}

	function nullUser(target: Function) {
		target.prototype.users = 0;
	}

	function changeUsersCountStatic<T extends {
		new(...args: any[]): {}
	}>(ct: T) {
		console.log("::ct", ct)
		return class extends ct {
			users = 3;
		}
	}

	const userService = new UserService();
	console.log("userService::", userService.getUsers());

	// Возможно получить класс "UserService" только уже после его изменения декоратором
	if (false) {
		class UserService2 extends UserService {
			override users: number = 22;

			override getUsers(): number {
				super.getUsers();
				return this.users;
			}
		}

		const userService2 = new UserService2();
		console.log("UserService2::", userService2.getUsers());
	}
}