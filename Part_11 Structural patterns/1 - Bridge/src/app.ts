interface IProvide {
	sendMessage(message: string): void;

	connect(config: unknown): void;

	disconnect(): void;
}

class TelegramProvide implements IProvide {
	connect(config: unknown): void {
		console.log("TelegramProvide::connect::config", config);

	}

	disconnect(): void {
		console.log("TelegramProvide::disconnect");
	}

	sendMessage(message: string): void {
		console.log("TelegramProvide::sendMessage::", message);
	}


}

class WhatsUpProvide implements IProvide {
	connect(config: unknown): void {
		console.log("WhatsUpProvide::connect::config", config);

	}

	disconnect(): void {
		console.log("WhatsUpProvide::disconnect");
	}

	sendMessage(message: string): void {
		console.log("WhatsUpProvide::sendMessage::", message);
	}


}

class NotificationSender {
	constructor(private provider: IProvide) {
	}

	send(message:string){
		this.provider.connect('connect');
		this.provider.sendMessage(message);
		this.provider.disconnect();
	}
}

class DelayNotificationSender extends NotificationSender {
	constructor(provider: IProvide) {
		super(provider);
	}
	sendDelay(message:string,date:Date=new Date()){
		console.log("DelayNotificationSender::sendDelay::date::",date);
		super.send(message);
	}
}

const telegramProvide = new TelegramProvide();
const whatsUpProvide = new WhatsUpProvide();

const notificationSenderTelegram = new NotificationSender(telegramProvide);
const delayNotificationSenderWhatsUpProvide = new DelayNotificationSender(whatsUpProvide);

notificationSenderTelegram.send("Some message to notice");
delayNotificationSenderWhatsUpProvide.send("not delay notice");
delayNotificationSenderWhatsUpProvide.sendDelay("delay notice");