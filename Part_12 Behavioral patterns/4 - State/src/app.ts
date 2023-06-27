class DocumentItem {
	private state: DocumentItemState;

	getState() {
		return this.state
	};

	setState(state: DocumentItemState) {
		this.state = state
		this.state.setContext(this);
	};

	publishDoc() {
		this.state.publish();
	}

	deleteDoc() {
		this.state.delete();
	}

	constructor(public text: string) {
		this.setState(new DraftDocumentItemState());
	}
}

abstract class DocumentItemState {
	public name: string;
	public item: DocumentItem;

	public setContext(item: DocumentItem) {
		this.item = item;
		console.log("setContext::", item)
	}

	public abstract publish(): void;

	public abstract delete(): void;
}

class DraftDocumentItemState extends DocumentItemState {
	constructor() {
		super();
		this.name = 'DraftDocument'
	}

	public publish() {
		this.item.setState(new PublishDocumentItemState());
		console.log(`Опубликован Document`, {text: this.item.text});

	}

	public delete() {
		console.log(`Document удалён`);
	}
}

class PublishDocumentItemState extends DocumentItemState {
	constructor() {
		super();
		this.name = 'PublishDocument'
	}

	public publish() {
		console.log(`Документ уже был опубликован`)
	}

	public delete() {
		console.log(`Снято с публикации`);
		this.item.setState(new DraftDocumentItemState());
	}
}

const item = new DocumentItem(`Мой пост об отмене похода в крепость`);
console.log(item.getState());
item.publishDoc();
console.log(item.getState());
item.deleteDoc();
console.log(item.getState());
item.deleteDoc();

