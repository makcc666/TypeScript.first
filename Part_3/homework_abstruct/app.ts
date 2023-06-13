type messageLogger = any;

abstract class Logger {
    abstract log(message: messageLogger): void;

    printDate(date?: Date): void {
        const dateToLog = date ?? new Date();
        this.log(dateToLog);
    }

}

class DataLogger extends Logger {
    protected message: messageLogger;

    log(message: messageLogger): void {
        console.log("log::", message);
    }

    logWithDate(message:string) {
        this.printDate();
        this.log(message);
    }
}

const dataLogger = new DataLogger();
dataLogger.printDate();
dataLogger.logWithDate("Some message to log");
