interface IPayment {
    sum: number;
    from: number;
    to: number;
}

enum PaymentStatus {
    Success = 'success',
    Failed = 'failed',
}

interface IPaymentRequest extends IPayment {
}

interface IDataSuccess extends IPayment {
    databaseId: number;
}

interface IDataFailed {
    errorMessage: string;
    errorCode: number;
}

interface IResponseSuccess {
    status: PaymentStatus.Success;
    data: IDataSuccess;
}

interface IResponseFailed {
    status: PaymentStatus.Failed;
    data: IDataFailed;
}

type f = (res: IResponseSuccess) => number;

const is_pay_response_success = (res: IResponseSuccess | IResponseFailed): res is IResponseSuccess => {
    return res?.status === PaymentStatus.Success;
}
const is_pay_response_fail = (res: IResponseSuccess | IResponseFailed): res is IResponseFailed => {
    return res?.status === PaymentStatus.Failed;
}

type Res = IResponseSuccess | IResponseFailed;

const get_payment_database_id = (res:Res):number=>{
    if (is_pay_response_success(res)){
        return res.data.databaseId;
    }
    throw new Error(res.data.errorMessage);
}

const send_payment = async (req: IPayment): Promise<number> => {
    const res = await fetch("/api/payment", {
        method: "post",
        body: JSON.stringify(req),
    });
    const json_data:Res = await res.json();
    return get_payment_database_id(json_data);
}

/*
const send_payment = async (req: IPayment): Promise<number> => {
    const res = await fetch("/api/payment", {
        method: "post",
        body: JSON.stringify(req),
    });
    const json_data:Res = await res.json();
    if (is_pay_response_success(json_data)) {
        return json_data.data.databaseId;
    }

    throw json_data;
}

(async () => {
    try {
        const data = await send_payment({
            sum: 5,
            from: 10,
            to: 111,
        });
        console.log("pay database_id is::", data);
    } catch (e) {
        if (is_pay_response_fail(e)) {
            console.error(e.data.errorMessage);
        } else {
            console.error("Unknown error");
        }
    }
})();

 */