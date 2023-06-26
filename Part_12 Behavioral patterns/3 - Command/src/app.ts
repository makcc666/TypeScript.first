class User {
	constructor(public userId: number) {
	}
}

class UserService {
	saveUser(user: User) {
		console.log(`User save`, {userId: user.userId})
	}

	deleteUser(userId: number) {
		console.log(`Delete user`, {userId})
	}
}


class CommandHistory {
	public commands: Command[] = [];

	push(command: Command) {
		this.commands.push(command);
	}

	remove(command: Command) {
		this.commands = this.commands.filter(c => c.commandId !== command.commandId);
	}
}

abstract class Command {
	public commandId: number;

	abstract execute(): void;

	constructor(public history: CommandHistory) {
		this.commandId = Math.random();
	}
}

class AddUserCommand extends Command {
	constructor(
		private user: User,
		private receiver: UserService,
		history: CommandHistory
	) {
		super(history);

	}

	execute(): void {
		this.receiver.saveUser(this.user)
		this.history.push(this);
	}

	undo() {
		this.receiver.deleteUser(this.user.userId);
		this.history.remove(this);
	}
}


class Controller {
	receiver: UserService;
	history: CommandHistory = new CommandHistory();

	addReceiver(receiver: UserService) {
		this.receiver = receiver;
	}

	addUser(user: User) {
		const addUser = new AddUserCommand(user,this.receiver,this.history);
		console.log("addUser::after init",addUser,this.history.commands);
		addUser.execute();
		console.log("addUser::after execute",addUser,this.history.commands);
		addUser.undo();
		console.log("addUser::after undo",addUser,this.history.commands);
	}
}

const controller = new Controller();
controller.addReceiver(new UserService());
controller.addUser(new User(40));