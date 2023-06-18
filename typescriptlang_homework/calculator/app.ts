/*
    Нужно типизировать интерфейс Calculator, так, чтобы вызовы `calculator` были
    с ошибками компиляции или без них в зависимости от переданных параметров.
    Типы SumAction, LengthAction, ZeroAction также можно менять.
*/

type SumAction = (first: number, second: number) => number;
type LengthAction = (withLength:Array<any> | string) => number;
type ZeroAction = (value: string | number) => boolean;
type LogAction = (first:number) => (second: number) => number;

interface Calculator {
    (command: "sum"): SumAction;

    (command: "length"): LengthAction;

    (command: "zero"): ZeroAction;

    (command: "log"): LogAction;
}

/* Этот код трогать не нужно */
const calculator: Calculator = (command: string): any => {
    switch (command) {
        case "sum":
            return (a: any, b: any) => a + b;
        case "length":
            return (a: any) => a.length;
        case "zero":
            return (a: any) => typeof a === "string" ? a.length !== 0 : a !== 0;
        case "log":
            return (b: any) => (a: any) => Math.log(a) / Math.log(b)
    }
}
/* --- */

/* Без ошибок */
calculator("sum")(10, 15)
calculator("length")("qweqweq")
calculator("zero")(10)
calculator("zero")("qweqwe")
const ln = calculator("log")(Math.E)
ln(15)
calculator("log")(2)(256)
/* Без ошибок */

/*
    Комментариями @ts-expect-error помечены строчки, в которых должны быть ошибки в финальном решении.
    Если в этих строчках ошибок не будет, компилятор TS выдаст ошибку компиляции, подробнее можно прочитать здесь:
    https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html#-ts-expect-error-comments
*/

/* С ошибками */
// @ts-expect-error
calculator("lalaka")("malaka")

// @ts-expect-error
calculator("sum")(true)
// @ts-expect-error
calculator("sum")(10)
// @ts-expect-error
calculator("sum")("1")

// @ts-expect-error
calculator("length")(10)
// @ts-expect-error
calculator("length")(true)
// @ts-expect-error
calculator("length")("a", "b")

// @ts-expect-error
calculator("zero")(10, 10)
// @ts-expect-error
calculator("zero")(10, "10")
// @ts-expect-error
calculator("zero")("10", 10)
// @ts-expect-error
calculator("zero")(true)
// @ts-expect-error
calculator("zero")({})
// @ts-expect-error
calculator("zero")([])

// @ts-expect-error
calculator("log")("e")
// @ts-expect-error
calculator("log")("10")
// @ts-expect-error
calculator("log")(true)
// @ts-expect-error
calculator("log")(10)("100")
// @ts-expect-error
calculator("log")(10)(true)
// @ts-expect-error
calculator("log")(2, 1024)
/* --- */