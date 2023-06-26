interface Mediator {
	notify(sender: string, event: string): void;
}


abstract class Mediated {
	protected mediator: Mediator;

	setMediator(mediator: Mediator) {
		this.mediator = mediator
	}
}

class Notifications {
	send() {
		console.log(`Отправляю уведомление`);
	}
}

class Logger {
	log(message: string) {
		console.log("Logger::log::", message);
	}
}

class EventHandler extends Mediated {
	myEvent() {
		this.mediator.notify('EventHandler', 'MyEvent');
	}
}

class NotificationMediator implements Mediator {
	constructor(
		public notifications: Notifications,
		public logger: Logger,
	) {
	}

	notify(sender: string, event: string): void {
		switch (event) {
			case "MyEvent": {
				this.notifications.send();
				this.logger.log(`NotificationMediator::notify::Отправлено`);
			}
		}
	}
}

const handler = new EventHandler();
const logger = new Logger();
const notifications = new Notifications();

const mediator = new NotificationMediator(notifications, logger);
handler.setMediator(mediator);

handler.myEvent();