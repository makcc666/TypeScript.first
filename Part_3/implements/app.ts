{
    interface ILogger {
        log(...args: any[]): void,

        error(...args: any[]): Promise<void> | void,
    }

    class Logger implements ILogger {
        log(...args: any[]): void {
            console.log(...args);
        }

        async error(...args: any[]): Promise<void> {
            console.error(...args);
            return Promise.resolve();
        }
    }

    interface IPayable {
        pay(paymentId: number): void;

        price?: number;
    }

    interface IDeletable {
        delete(): void;
    }

    class User implements IPayable, IDeletable {
        price: number | undefined;

        // Метод должен быть равен интерфейсу или расширенному интерфейсу
        pay(paymentId: number | string): void {
            ///
        }

        delete(): void {
            ///
        }

    }

}