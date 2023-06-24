interface IPrototype<T> {
	clone():T;
}

class UserHistory implements  IPrototype<UserHistory>{
	createdAt:Date;
	constructor(public email:string,public name:string) {
		this.createdAt=new Date();
	}

	clone():UserHistory {
		let target = new UserHistory(this.email,this.name);
		target.createdAt = this.createdAt;
		return target
	}
}

const user1 = new UserHistory("asd@asf.com","Ursa");
console.log("user1::",user1);
const user2 = user1.clone();
user2.name = "NeUrsa";
console.log("user2::",user2);