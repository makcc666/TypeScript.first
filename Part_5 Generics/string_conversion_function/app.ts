{
    function conversionString<T>(data: T): string | undefined {
        switch (typeof data) {
            case "string":
                return <string>data;
            case "number":
            case "boolean":
            case "symbol":
            case "bigint":
            case "function":
                return data.toString();
            case "object":
                return JSON.stringify(data);
            default:
                return undefined;
        }
    }

    const x = conversionString<string>("asfsf");
    // const x = conversionString("asfsf"); // Тоже можно

    console.log(conversionString(123));
    console.log(conversionString([1,2,3]));
    console.log(conversionString({x:1,b:2,c:3}));

}