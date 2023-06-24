export const a = 'someValueOfA';
export class Test{

}

export const Obj={};

export type MyType = string | number;
// export type MyType2 = string | number; // Нельзя. В default export-ится только RunTime сущности

export default function run(){
	console.log("fn run");
}