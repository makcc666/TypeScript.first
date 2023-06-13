abstract class Controller {
    protected abstract handler(req: any): void;

    abstract userName: string;

    handlerWithLogs(req: any): void {
        console.log("Start");
        this.handler(req);
        console.log("End");
    }

    saveUserName(userName: string): void {
        if (userName.trim().length===0)throw "Пустое значение аргумента ";
        this.userName = userName;
    }
}

class UserController extends Controller {
    userName: string="Unknown";

    handler(req: any): void {
        console.log("handler::req::", req);
        console.log("handler::userName::", this.userName);
    }


}

const urc = new UserController();
urc.handlerWithLogs("some data of request");
urc.saveUserName("Ursa");
urc.handlerWithLogs("req and saved userName");
