{
    const a1: number = Math.random() > 0.5 ? 1 : 0;

    interface HTTPResponse<T extends 'success' | 'failed'> {
        code: number;
        data: T extends 'success' ? string : Error;
        data2: T extends 'success' ? string : number;
    }

    const resSuccess: HTTPResponse<'success'> = {
        code: 200,
        data: 'done',
        data2: 'allDone',
    }
    const resFail: HTTPResponse<'failed'> = {
        code: 404,
        data: new Error("Not found"),
        data2: 502,
    }


    class User {
        name: string;
        id: number;
    }

    class UserPersistent {
        dbId: string
    }

    function getUser(id: number): User;
    function getUser(dbId: string): UserPersistent;
    function getUser(dbIdOrId: number | string): User | UserPersistent {
        if (typeof dbIdOrId === "number") {
            return new User();
        } else {
            return new UserPersistent();
        }
    }

    const fnRes2 = getUser(5102);
    const fnRes = getUser("someUid");

    type UserOrUserPersistent<T extends number | string> = T extends number ? User : UserPersistent;

    function getUser2<T extends number | string>(id: T): UserOrUserPersistent<T> {
        if (typeof id === "number") {
            return new User() as UserOrUserPersistent<T>;
        } else {
            return new UserPersistent() as UserOrUserPersistent<T>;
        }
    }

    const fn2Res = getUser2(11);
    const fn2Res2 = getUser2("someUniqUid");

}