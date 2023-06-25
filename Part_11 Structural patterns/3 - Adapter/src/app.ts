class KVDDatabase {
	private db: Map<string, string> = new Map();

	save(key: string, value: string) {
		this.db.set(key, value);
	}
}

class PersistentDB {
	savePersistent(objectData: Object) {
		console.log("savePersistent::objectData::", objectData);
	}
}

class PersistentDBAdapter extends KVDDatabase {
	constructor(public database: PersistentDB) {
		super();
	}

	override save(key: string, value: string): void {
		this.database.savePersistent({
			key,
			value
		});
	}
}


function run(base: KVDDatabase) {
	base.save('someKey', 'someValue');
}

run(new PersistentDBAdapter(new PersistentDB()));