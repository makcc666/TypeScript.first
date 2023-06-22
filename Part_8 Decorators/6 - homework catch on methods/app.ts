{
	interface IUserService {
		users: number;

		getUsersInDatabase(): number
	}

	class UserService implements IUserService {
		users: number = 1000;

		@CatchError(false)
		getUsersInDatabase(): number {
			throw new Error("Ошибка");
		}
	}

	type TypedFullPropertyDescriptor = TypedPropertyDescriptor<(...args: any[]) => any>;

	function CatchError(emitError: boolean = false) {
		return function (
			target: Object,
			propertyKey: string | symbol,
			descriptor: TypedFullPropertyDescriptor
		): TypedFullPropertyDescriptor | void {
			const oldValue = descriptor.value;
			if (typeof oldValue !== "function") return;

			if (oldValue instanceof (async () => {
			}).constructor) {

				descriptor.value = async function (...args: any[]) {
					try {
						return await oldValue.apply(target, args);
					} catch (e) {
						console.log("Возникла ошибка::", e);
						if (emitError && e instanceof Error) throw e;
					}
				}
			} else {
				descriptor.value = function (...args: any[]) {
					try {
						return oldValue.apply(target, args);
					} catch (e) {
						console.log("Возникла ошибка::", e);
						if (emitError && e instanceof Error) throw e;
					}
				}
			}
		}
	}

	console.log(new UserService().getUsersInDatabase());
	console.log("script is end")
}