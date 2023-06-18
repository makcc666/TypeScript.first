/*
    Укажите сигнатуры функций a1-a5, чтобы не было ошибок компиляции
*/
function a1(first:number,second?:number) { }
function a2(first:number | string, second:boolean) { }
function a3(param?:{f1?:string}) { }
function a4():number {return 1; }
function a5(...args):string { return args.join()}

a1(10);
a1(5 + 2);
a2(10, true);
a2("lalaka", false);
a3();
a3({});
a3({ f1: "malaka" });
const _a4: number = a4();
const _a5: string = a5(...["lalaka", "malaka"]);

/*
    Опишите типы BA, BB и BC, чтобы не было ошибок компиляции
*/
type BA = (param?:number)=>string;
type BB = (a?:string | number[])=>string | number[];
type BC = (...args:number[])=>number;

const b1: BA = () => "lalaka";
const b2: BA = a => "lalaka" + a;
b1(10);
b2(15);

const b3: BB = () => [15];
const b4: BB = a => a;
b3([100]);
b4();

const b5: BC = () => 10;
const b6: BC = a => a;
const b7: BC = (a, b) => a + b;
const b8: BC = (a, b, c) => a + b + c;
b5(60, 70, 100, 15, 222, 334);

/*
    Укажите строгие перегрузки функции `c`, чтобы не было ошибок компиляции
    и функцию `c` нельзя было вызвать с какими угодно параметрами
*/
function c(): number;
function c(num:number): [number];
function c(str1:string,str2:string): string;
function c(str:string,num:number): number;
function c(str:string,bool:boolean): boolean;
function c(...rest: any[]): any {

}

const c1: number = c();
const c2: [number] = c(10);
const c3: string = c("string", "lalaka");
const c4: number = c("number", 10);
const c5: boolean = c("boolean", false);
const c6: boolean = c("any" + "string", true);
