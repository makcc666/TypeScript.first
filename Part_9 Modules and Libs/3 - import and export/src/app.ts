import runFunction, {a} from './modules/some'; // Default import + another
import running from './modules/some'; // Default import. Название не влияет
import * as allModuleData from './modules/some'; // Default import. Название не влияет
import {Test as TestClass} from './modules/some'; // Import класса
import type {MyType} from './modules/some'; // Специализированный import типа
import {type MyType as MyType2} from './modules/some'; // Второй вид записи специализированного import типа

running();
runFunction();
console.log(allModuleData);
console.log(a);

new TestClass();