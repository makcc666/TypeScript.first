class Form {
	constructor(public name: string) {

	}
}

abstract class SaveForm<T> {
	public save(form: Form) {
		const res = this.fill(form);
		this.log(res);
		this.send(res)
	}

	protected abstract fill(form: Form): T;

	protected abstract send(data: T): void;

	protected log(data: T) {
		console.log("SaveForm::log::data", data);
	}
}

class FirstAPI extends SaveForm<string> {
	protected fill(form: Form): string {
		return form.name;
	}

	protected send(data: string): void {
		console.log(`FirstAPI::send::data`, data);
	}
}

type TSecondAPIData = {
	fio: string
};

class SecondAPI extends SaveForm<TSecondAPIData> {
	protected fill(form: Form): TSecondAPIData {
		return {fio: form.name};
	}

	protected send(data: TSecondAPIData): void {
		console.log(`SecondAPI::send::data`, data);
	}
}

const form1 = new FirstAPI();
form1.save(new Form("Ursa"));

const form2 = new FirstAPI();
form2.save(new Form("NeUrsa"));
