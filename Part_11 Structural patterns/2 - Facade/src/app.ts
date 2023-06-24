class Notify {
	send(template: string, to: string) {
		console.log(`Отправленно::`, {
			template,
			to
		});
	}
}

class Logger {
	log(message: string, emitError: boolean = false): never | void {
		console.log("Logger::log::", message);
		if (emitError) throw new Error(message);
	}
}

interface ITemplateUnit {
	template: string
}

interface ITemplateUnits {
	[key: string]: ITemplateUnit
}

class Template {
	readonly templates: ITemplateUnits = {
		"other": {
			template: `<h1>Шаблон с H1</h1>`
		},
		"primary": {
			template: `<span>Шаблон с SPAN</span>`
		},
	}

	getByName<T extends string & keyof typeof this.templates>(name: T): ITemplateUnit | undefined {
		return this.templates[name];
	}

}

class NotificationFacade {
	private notify: Notify;
	private logger: Logger;
	private template: Template;

	constructor() {
		this.notify = new Notify();
		this.logger = new Logger();
		this.template = new Template();

	}

	send<T extends string & keyof typeof this.template.templates>(to: string, templateName: T) {
		this.logger.log(`Попытка отправки шаблона "${templateName}" : ${to}`);
		const template = this.template.getByName(templateName);
		if (template === undefined) return this.logger.log(`Шаблон "${templateName}" не найден`, true);

		this.notify.send(template.template, to);
		this.logger.log(`Отправлен шаблона "${templateName}" : ${to}`);
	}
}

const notificationFacade = new NotificationFacade();
notificationFacade.send("ursa@email.com", "other");

