// Num
{
    enum status_code__num {
        SUCCESS = 1,
        FAILED = 2,
        FILED = 2,
    }

    const res__of_num = {
        message: "Платёж завершён успешно",
        status_code: status_code__num.SUCCESS, // => 1
    }
    console.log("res__of_num::", res__of_num);
}

// Manual start + auto
{
    enum status_code__auto {
        SUCCESS = 5,
        IN_PROGRESS,
        FAILED,
    }

    const res__of_auto = {
        message: "Платёж в процессе",
        status_code: status_code__auto.IN_PROGRESS, // => 6
    }
    console.log("res__of_auto::", res__of_auto);
}

// Many => гетерогенный
{
    enum status_code__many {
        SUCCESS,
        IN_PROGRESS = 5,
        FAILED,
        WAIT = "wait_process",
    }

    const res__of_many = {
        message: "Платёж ещё не завершён",
        status_code: status_code__many.WAIT, // => "wait_process"
    }
    console.log("res__of_many::", res__of_many);

    const validator = (status: status_code__many) => {
        return `Status value is "${status}"`;
    }

    validator(status_code__many.SUCCESS);
    validator(0); // EQ!

    // NOT WORKING! Если аргумент не из ENUM, то принимает только INT. Особенность ENUM
    //validator("wait_process");
    validator(status_code__many.WAIT) // work!

}

// NOT WORKING!
{
    /*

    enum status_code__some {
        SUCCESS,
        IN_PROGRESS = "p",
        FAILED,
    }

    const status_code__some = {
        message: "Платёж завершён успешно",
        status_code: status_code__num.FAILED, // => ERROR !
    }
     */
}

// Dynamic
{
    const _get_user_role = (): number => 5;
    const _calc_moder_role = (): number => roles.USER - 3;

    enum roles {
        ADMIN = 1,
        USER = _get_user_role(),
        MODER = _calc_moder_role(),
    }

    console.log("roles.MODER", roles.MODER); // => 2
}

// CONST, FAST!
{
    // Только примитивы
    // Заменит упомянутые в коде enum в значения 
    const enum roles__fast {
        ADMIN = 1,
        USER = 5,
    }

    console.log("roles__fast::ADMIN::",roles__fast.ADMIN); // => 1
}