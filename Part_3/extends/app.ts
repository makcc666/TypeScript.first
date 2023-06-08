{
    type PaymentStatus = "new" | "paid";

    class Payment {
        id: number;
        status: PaymentStatus = "new";

        constructor(id: number) {
            this.id = id;


        }

        pay(): boolean {
            if (this.status === "paid") {
                let _: never;
                throw new Error("Уже оплачено");
            }

            this.status = "paid";
            return true;
        }
    }

    class PersistedPayment extends Payment {
        databaseId: number;
        paidAt: Date;

        constructor() {
            const id = Math.random();
            super(id);
        }

        save() {
            /// upload to DB
        }

        /**
         * Bad practices
         *
        pay(date?: Date) {
            super.pay();

            if (date) {
                this.paidAt = date;
            }
            return true;
        }
         */

        // Автоматически применяется super.pay()
        // Защищает от ситуации, когда в родительском классе удаляется метод с этим именем
        override pay(date: Date = new Date()) {
            if (date) {
                this.paidAt = date;
            }
            return true;
        }
    }


    const persistedPay = new PersistedPayment();
    persistedPay.pay();
    persistedPay.save();
    console.log("persistedPay::", {id: persistedPay.id}, [persistedPay.paidAt, persistedPay.status])
}