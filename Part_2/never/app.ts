/**
 * Указывает, что функция никогда ничего не вернёт
 */

// Throw не является возвратом функции
const getError = (message: string): never => {
    throw new Error(message);
}

const infinity_while = (): never => {
    let i = 0;
    while (true) {
        i++;
    }
}

// Проверка, что переменная является строкой (string), а не числом (number)
const is_variable_string_not_number = (value: string | number): boolean => {
    if (typeof value === "string") return true;
    if (typeof value === "number") return false;
    return getError("Variable must be String or Number");
}

/**
 * TS позволяет следить за соответствием CASES к возможным значениям.
 * Следующий блок, не даст добавить новую вариацию "file_action", без последующего добавления обработчика CASE
 */
{
    type file_action = "remove" | "up";

    // Не выйдет добавить новое значение, не добавив для него CASES
    // type file_action = "remove" | "up" | "down";

// TS позволяет
    const doing_action = (action: file_action) => {
        switch (action) {
            default: {
                const _: never = action;
                return getError("Нет такого file_action");
            }
            case "remove": {
                /// some doing
                return true;
                break;
            }
            case "up": {
                return "already";
                // another doing
            }

        }
    }
}
