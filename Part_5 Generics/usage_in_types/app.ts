{
    function getSplitedHalf<T>(data: Array<T>): Array<T> {
        const l = data.length / 2;
        return data.splice(0, l);
    }

    // Запись generics. Описание типа функции

    const toSplit: <T>(data: Array<T>) => Array<T> = getSplitedHalf;
    const toSplit2: <Y>(data: Array<Y>) => Array<Y> = getSplitedHalf; // Аналогичная
}
{
    interface ILog<T> {
        timeStamp: Date;
        data: T
    }

    const logLine: ILog<{
        a: number,
        x: string
    }> = {
        timeStamp: new Date(),
        data: {
            a: 1,
            x: "xValue",
        }
    }

    const logArr: ILog<any[]> = {
        timeStamp: new Date(),
        data: [1, 2, 3]
    }


    const logString: ILog<string> = {
        timeStamp: new Date(),
        data: "someString"
    }

    // Аналог
    type LogLineType<T> = {
        timeStamp: Date;
        data: T
    }
    const typeLogLine: ILog<{
        a: number,
        x: string
    }> = {
        timeStamp: new Date(),
        data: {
            a: 124,
            x: "someString"
        }
    }
}