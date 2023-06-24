class MyMap {
	private static instance: MyMap;
	map: Map<number, string> = new Map();

	private constructor() {
	}

	clean() {
		this.map.clear();
	}

	public static get(): MyMap {
		if (!this.instance) this.instance = new MyMap();
		return this.instance;
	}
}

class MyService1 {
	setValue(key: number, value: string) {
		const myMap = MyMap.get();
		myMap.map.set(key, value);
	}
}

class MyService2 {
	readValue(key: number) {
		const myMap = MyMap.get();
		console.log(myMap.map.get(key));
		myMap.clean();
		console.log(myMap.map.get(key));
	}
}

const myService1 = new MyService1();
myService1.setValue(1,"SomeValue");
const myService2 = new MyService2();
myService2.readValue(1);
