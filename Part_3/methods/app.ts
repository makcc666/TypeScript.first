enum PaymentsStatus {
    Holded,
    Processed,
    Reversed,
}

class Payment {
    id: number;
    status: PaymentsStatus = PaymentsStatus.Holded;

    dates: {
        created:Date,
        updated:Date,
    } = {
        created:new Date(),
        updated:new Date(),
    }

    constructor(id: number) {
        this.id = id;
    }

    get getPaymentLifeTime(): number {
        return Date.now() - this.dates.created.getTime();
    }

    unholdPayment(): void {
        if (this.status !== PaymentsStatus.Holded) {
            throw new Error("Платёж не может быть возвращён")
        }
        this.status = PaymentsStatus.Reversed;
        this.dates.updated = new Date();
    }
}

const user_payment = new Payment(52);
user_payment.unholdPayment()
console.log("user_payment::payment lifetime", user_payment.getPaymentLifeTime)
