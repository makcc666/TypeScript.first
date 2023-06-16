class Resp<D, E> {
    data?: D;
    error?: E;

    constructor(data?: D, error?: E) {
        if (data) this.data = data;
        if (error) this.error = error;
    }
}

const res = new Resp<string, number>("someData");

// Нельзя extends от generic, нужно явно указывать их тип
class HTTPResp<F> extends Resp<string, number> {
    protected code: F;

    setCode(code: F) {
        this.code=code;
    }
}

const resHTTP = new HTTPResp();
resHTTP.setCode("some");