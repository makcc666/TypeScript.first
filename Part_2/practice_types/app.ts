interface I_Payment {
    sum: number,
    from: number,
    to: number,
}

interface I_Payment_Request extends I_Payment {
}

enum Payment_Response_Status {
    Fail = "failed",
    Success = "success",
}


interface I_Response_data__Success extends I_Payment {
    databaseId: number,
}

interface I_Response_data__Fail {
    errorMessage: string,
    errorCode: number,
}

interface I_Response {
    status: Payment_Response_Status,
    body: I_Response_data__Success | I_Response_data__Fail,
}

interface I_Response_Success extends I_Response{
    status: Payment_Response_Status.Success,
    body: I_Response_data__Success,
}

interface I_Response_Fail extends I_Response{
    status: Payment_Response_Status.Fail,
    body: I_Response_data__Fail,
}


const try_payments = async (data: I_Payment): Promise<I_Response_Success | I_Response_Fail> => {
    const req = await fetch("/pay", {
        method: 'POST',
        body: JSON.stringify(data),
    });
    return await req.json();
}

(async () => {
    const res = await try_payments({
        sum: 50,
        from: 1,
        to: 40,
    });
    if (res.status === Payment_Response_Status.Fail) {
        console.log("Платёж неудачный::", res.body.errorMessage);
        throw res.body;
    }

    return res.body.databaseId;
})();