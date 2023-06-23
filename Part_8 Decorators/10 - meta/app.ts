import 'reflect-metadata';

const SymbolPositiveMetadataKey = Symbol('POSITIVE_METADATA_KEY');
{
	interface IUserService {
		getUsersInDatabase(): number
	}

	class UserService implements IUserService {
		private _users: number;

		getUsersInDatabase(): number {
			return this._users;
		}

		@Validate10()
		setUsersInDatabase(@Positive10() count: number): void {
			this._users = count;
		}

	}


	const userService = new UserService();
	userService.setUsersInDatabase(1);
	console.log("userService.gettUsersInDatabase()::", userService.getUsersInDatabase());

	userService.setUsersInDatabase(10);
	console.log("userService.gettUsersInDatabase()::", userService.getUsersInDatabase());

	userService.setUsersInDatabase(-1); // ERROR

}

function Positive10() {
	return (
		target: Object,
		propertyKey: string | symbol,
		parameterIndex: number
	) => {
		console.log(Reflect.getOwnMetadata('design:type', target, propertyKey))
		console.log(Reflect.getOwnMetadata('design:paramtypes', target, propertyKey))
		console.log(Reflect.getOwnMetadata('design:returntype', target, propertyKey))
		const existParams: number[] = Reflect.getOwnMetadata(SymbolPositiveMetadataKey, target, propertyKey) || [];
		existParams.push(parameterIndex);
		Reflect.defineMetadata(SymbolPositiveMetadataKey, existParams, target, propertyKey);
	}
}

function Validate10() {
	return (
		target: Object,
		propertyKey: string | symbol,
		descriptor: TypedPropertyDescriptor<(...args: any[]) => any>,
	) => {
		const method = descriptor.value;
		descriptor.value = function (...args: any) {
			const positiveParams: number[] = Reflect.getOwnMetadata(SymbolPositiveMetadataKey, target, propertyKey);
			if (positiveParams) {
				for (const index of positiveParams) {
					if (args[index] < 0) {
						throw new Error(`Число должно быть больше нуля`);
					}
				}
			}
			return method?.apply(this, args);
		}
	}
}
