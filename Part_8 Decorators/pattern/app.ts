interface IUserService {
	users: number;

	getUsersInDatabase(): number;
}


class UserService implements IUserService {
	users: number=520;

	getUsersInDatabase(): number {
		return this.users;
	}

}

function nullUser(obj: UserService):UserService {
	obj.users = 0;
	return obj;
}

function logUsers(obj: UserService):UserService {
	console.log("logUsers::users count::", obj.users);
	return obj;
}

console.log(new UserService().getUsersInDatabase());
console.log(nullUser(new UserService()).getUsersInDatabase());
console.log(logUsers(nullUser(new UserService())).getUsersInDatabase());
console.log(nullUser(logUsers(new UserService())).getUsersInDatabase());