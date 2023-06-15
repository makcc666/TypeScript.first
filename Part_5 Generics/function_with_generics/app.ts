{
    // Иначе, пришлось бы писать ANY. Но тогда и RETURN был бы ANY
    // function lowMiddleware<AnyName>(data:AnyName):AnyName { // Общепринятое наименованием является "T"
    function lowMiddleware<T>(data:T):T {
        console.log(data);
        return data;
    }

    const resString:string = lowMiddleware("someString") // => res:string
    const resNumber:number = lowMiddleware(1110) // => res:string
    const resObject:object = lowMiddleware({x:"value",d:10});
}

{
    function getSplitedHalf<T>(data:Array<T>):Array<T> {
        const l = data.length/2;
        return data.splice(0,l);
    }

    console.log("getSplitedHalf::[1,2,3]",getSplitedHalf([1,2,3,4]));
    console.log(`getSplitedHalf::["some","another","last"]`,getSplitedHalf(["some","another","last"]));
}