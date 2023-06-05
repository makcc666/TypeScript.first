type voidFn = () => void;

const skills = ["Dev", "JS", "Head"];

const user: {
    personal_skills: string[],
} = {
    personal_skills: [],
}

// Void - игнорирование вывода. С ним ничего нельзя сделать, никакие операции не доступны
// Отличается от UNDEFINED

/**
 * Рассматривается данный пример.
 * ForEach ожидает RETURN VOID.
 * PUSH принимает аргумент и выдаёт NUMBER, который равен изменённому размеру массива.
 * Если бы ForEach ожидал UNDEFINED или любой другой тип, то была-бы ошибка.
 */
skills.forEach(skill => user.personal_skills.push(skill));