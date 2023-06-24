/**
 * Без "types.d.ts"
	// Bad practices. Нет преимуществ, которое даёт TypeScript
	//@ts-ignore
	import {toJson} from 'really-relaxed-json';

	const rjson = '[ one two three {foo:ber} ]';
	const json = toJson(rjson);
	console.log(json);
*/

// Ручная типизация библиотеки
import { toJson } from 'really-relaxed-json';

const rjson = '[ one two three {foo:ber} ]';
const json = toJson(rjson);
console.log(json);