/**
 * Unknown обозначают для того, чтобы потом её определить как тип.
 * Т.е. переменная нуждается в распознавании её типа
 */


let input_obj: unknown;
input_obj = 3;
input_obj = ["asf", "ggg"];

function run(i: unknown): void {
    if (typeof i === "number") {
        i++;
    } else if (typeof i === "string") {
        i = `I IS: ${i}`;
    }
}

run(input_obj);

async function some_fetch__1() {
    try {
        await fetch("/some")
    } catch (e) {
        if (e instanceof Error) {
            console.error(e.message)
        } else {
            console.error("UNKNOWN ERROR");
        }
    }
}
some_fetch__1();