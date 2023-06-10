interface IdbList {
    [index: number]: string,
}

class UserService {
    private static dbList: IdbList = {};
    private dbListLocal: IdbList = {};

    static getUser(id: number): string {
        return UserService.dbList[id];
    }

    create(id: number, name: string): void {
        UserService.dbList[id] = name;
        console.log("UserService.dbList::", UserService.dbList);
    }

    createLocal(id: number, name: string): void {
        this.dbListLocal[id] = name;
    }

    getUserLocal(id: number): string {
        return this.dbListLocal[id];
    }

    static {
        // Будет вызываться только в instance класса
        console.log("Programas started")

    }

}



/*
const inst = new UserService();
const inst2 = new UserService();
inst.create(1, "Ursa");
console.log("inst2::", UserService.getUser(1)) // => Ursa

inst2.createLocal(2, "Noko");
console.log("inst2::", inst2.getUserLocal(2)) // => Noko
console.log("UserService::", UserService.getUser(2)) // => undefined
*/