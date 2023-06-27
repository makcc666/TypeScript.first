class User {
	githubToken: string;
	jwtToken: string;
}

interface AuthStrategy {
	auth(user: User): boolean
}

class Auth {
	constructor(private strategy: AuthStrategy) {

	}

	setStrategy(strategy: AuthStrategy) {
		this.strategy = strategy;
	}

	public authUser(user: User): boolean {
		return this.strategy.auth(user);
	}
}

class JWTStrategy implements AuthStrategy {
	auth(user: User): boolean {
		return Boolean(user.jwtToken).valueOf()
	}
}

class GithubStrategy implements AuthStrategy {
	auth(user: User): boolean {
		return Boolean(user.githubToken).valueOf()
	}
}

const user = new User();
user.githubToken = 'someToken';

const auth = new Auth(new JWTStrategy());
console.log("auth::jwt::", auth.authUser(user));
auth.setStrategy(new GithubStrategy());
console.log("auth::github::", auth.authUser(user));
