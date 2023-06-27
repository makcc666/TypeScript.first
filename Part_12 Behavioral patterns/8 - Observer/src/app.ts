interface IObserver {
	update(subject: ISubject): void;
}

interface ISubject {
	attach(IObserver: IObserver): void;

	detach(IObserver: IObserver): void;

	notify(): void;
}

class Lead {
	constructor(public name: string, public phone: string) {
	}
}

class NewLead implements ISubject {
	private observers: IObserver[] = [];
	public state: Lead;

	attach(observer: IObserver): void {
		if (this.observers.includes(observer)) {
			return
		}
		this.observers.push(observer);
	}

	detach(observer: IObserver): void {
		const observerIndex = this.observers.indexOf(observer);
		if (observerIndex === -1) {
			return
		}
		this.observers.splice(observerIndex, 1);
	}

	notify(): void {
		for (const observer of this.observers) {
			observer.update(this);
		}
	}

	setState(state: Lead) {
		this.state = state;
		this.notify();
	}
}

class NotificationService implements IObserver {
	update(subject: ISubject) {
		console.log(`NotificationService updated!`, subject);
	}
}

class LeadService implements IObserver {
	update(subject: ISubject) {
		console.log(`LeadService updated!`, subject);
	}
}

const lead = new NewLead();

const notificationService = new NotificationService();
const leadService = new LeadService();

lead.attach(notificationService);
lead.attach(leadService);
lead.setState(new Lead('Ursa','000564'));
console.log("\n\n");
lead.detach(leadService);
lead.setState(new Lead('NeUrsa','000564'))

