{
	interface IUserService {
		getUsersInDatabase(): number
	}

	class UserService implements IUserService {
		private _users: number;

		getUsersInDatabase():number {
			return this._users;
		}
		setUsersInDatabase(@Positive() count:number,@Positive() count2:number):void {
			this._users=count;
		}

	}


	const userService = new UserService();

}

function Positive() {
	return (
		target: Object,
		propertyKey: string | symbol,
		parameterIndex: number
	)=> {
		console.log(target,propertyKey,parameterIndex)

	}
}
