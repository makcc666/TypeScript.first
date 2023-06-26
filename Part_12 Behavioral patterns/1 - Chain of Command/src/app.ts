interface IMiddleware {
	next(mid: IMiddleware): IMiddleware;

	handler(request: any): any;
}

abstract class AbstractMiddleware implements IMiddleware {
	private nextMiddleware: IMiddleware;

	next(mid: IMiddleware): IMiddleware {
		return this.nextMiddleware = mid;
	}

	handler(request: any) {
		if (this.nextMiddleware) {
			return this.nextMiddleware.handler(request);
		}
		return;
	}
}

class AuthMiddleware extends AbstractMiddleware {
	override handler(request: any) {
		console.log("AuthMiddleware");
		if (request?.userId === 1) {
			return super.handler(request);
		}
		throw new Error("Вы не авторизованны")
	}
}

class ValidateMiddleware extends AbstractMiddleware {
	override handler(request: any) {
		console.log("ValidateMiddleware");
		if (request?.body) {
			return super.handler(request);
		}
		throw new Error("Нет BODY");
	}
}

class Controller extends AbstractMiddleware {
	override handler(request: any) {
		console.log("Controller");
		return {success: request};
	}
}

const controller = new Controller();
const authMiddleware = new AuthMiddleware();
const validateMiddleware = new ValidateMiddleware();

authMiddleware.next(validateMiddleware).next(controller);
console.log("chain::",authMiddleware.handler({userId:1,body:"SomeBody"}))
