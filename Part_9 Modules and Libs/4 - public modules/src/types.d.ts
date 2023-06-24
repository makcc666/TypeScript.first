// Ручная типизация библиотеки
declare module 'really-relaxed-json' {
	export function toJson(rjsonString:string,compact?:boolean=true):string;
}