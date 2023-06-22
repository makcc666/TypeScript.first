{
	interface IUserService {
		users: number;
		getUsersInDatabase(): number
	}

	@CreatedAt
	class UserService implements IUserService {
		users: number = 1000;

		getUsersInDatabase(): number {
			return this.users;
		}
	}
	
	function CreatedAt<T extends { new(...args:any[]):{}}>(ct:T){
		return class extends ct {
			createdAt:TCreatedAt["createdAt"] = new Date();
		}
	}

	type TCreatedAt = {
		createdAt:Date
	}

	const userServiceWithDate = new UserService() as IUserService & TCreatedAt;
	console.log(userServiceWithDate.createdAt)
}