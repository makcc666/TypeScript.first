/*
    Комментариями @ts-expect-error помечены строчки, в которых должны быть ошибки в финальном решении.
    Если в этих строчках ошибок не будет, компилятор TS выдаст ошибку компиляции, подробнее можно прочитать здесь:
    https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html#-ts-expect-error-comments
*/

/*
    Укажите значения, чтобы не было ошибок компиляции
*/
const a1: {} = {};
const a2: { f1: number } = {f1:Math.random()};
const a3: { f1: 10, f2: true | string } = {f1:10,f2:true};
const a4: { f1: number } | { f1: string } = {f1:"someString"};
const a5: { f1?: number, f2?: number } = {};

/*
    Укажите типы, чтобы не было ошибок компиляции
*/
let b1:{f:number | string}  = { f: 15 + 15 };
b1 = { f: "lalaka" + "malaka" };

let b2: {f1?:number[], f2: {f3:string}}  = { f2: { f3: "lalaka" } };
b2 = { f1: [10], f2: { f3: "malaka" } };

let b3:{ f1:boolean}  = { f1: true };
b3 = { f1: false };

let b4:{a:boolean,c?:boolean,b:boolean,q?:boolean}  = { a: true, b: false };
b4["c"] = false;
b4["q"] = false;
b4["a" + "b"] = true;

/*
    Укажите типы для CA, CB, CC, CD, чтобы не было ошибок компиляции
*/
type CA = string;
type CB =number | boolean ;
type CC = {f1:CB};
type CD = Array<{a?:CA, ab?:CA}> ;

const c1: CA = "lalaka";
const c2: CA = c1 + c1;
const c3: CB = 10;
const c4: CB = false;
const c5: CC = { f1: 16 };
const c6: CC = { f1: c3 };
const c7: CD = [];
c7.push({ a: "lalaka" });
c7.push({ ["a" + "b"]: "malaka" });
