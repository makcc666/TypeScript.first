{
	interface IUserService {
		users: number;

		getUsers(): number
	}

	// @setUsers(200) // Не работает. WTF?
	@changeUsersCountDynamic(200)
	class UserService implements IUserService {
		users: number = 1000;

		getUsers(): number {
			return this.users;
		}
	}

	function changeUsersCountDynamic(usersCount: number) {
		return <T extends {
			new(...args: any[]): {}
		}>(ct: T) => {
			console.log("::ct", ct)
			return class extends ct {
				users = usersCount;
			}
		}
	}

	function nullUser(target: Function) {
		target.prototype.users = 123;
	}

	const userService = new UserService();
	console.log("userService::", userService.getUsers());

}