{
    // Похож на запись `number[]`
    const num: Array<number> = [1, 2, 3];

    async function test() {
        const a: number = await new Promise<number>((resolve, reject) => {

            // resolve("asf"); // ERROR!
            resolve(123);
        });
        console.log("a::", a);

    }


    // Словарь
    // Правильная типизация, неограниченного числа string=>boolean.
    const check:Record<string,boolean> = {
        drive: true,
        kpp: false,
    }
}