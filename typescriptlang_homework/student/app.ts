/*
    Даны несколько заготовленных type alias. При помощи их "собран" тип Student.
    Соберите типы Teacher и Director из имеющихся типов. Для проверки используйте
    переменные в самом низу. Можно определять новые типы.

    Teacher имеет идентификатор, имя, уровень скила и словарь из его курсов.
    В словаре курсов Teacher-а по ключу id курса лежит объект с идентификатором курса,
    названием и ролью учителя.

    Director имеет идентификатор, имя, словарь студентов и словарь учителей. Словарь
    студентов по id студента содержит объект с идентификатором и именем студента.
    Словарь учителей по id учителя содержит объект с идентификатором, именем, уровнем
    и оценкой учителя
*/
type User = {
    id: string;
    name: string;
}

type Course = {
    id: number;
    title: string;
}

type WithRate = {
    rate: 1 | 2 | 3 | 4 | 5;
}

type WithStudentRole = {
    role: "student"
}

type WithTeacherRole = {
    role: "teacher"
}

type WithLevel = {
    level: "junior" | "middle" | "senior"
}
/* --- */

type StudentCourse = Course & WithStudentRole & WithRate & WithLevel
type Student = User & {
    courses: {
        [id: number]: StudentCourse
    }
}

type Teacher = User & WithLevel & {
    courses: {
        [id: number]: Course & WithTeacherRole
    }
};

type Director = User & {
    students: {
        [id: string]: User
    },
    teachers:{
        [id: string]: User & WithRate & WithLevel
    }
};

/*--  Проверка  --*/
const s1: Student = {
    id: "s1",
    name: "s1",
    courses: {
        [1]: {
            id: 1,
            title: "First",
            rate: 5,
            role: "student",
            level: "middle"
        }
    },
}

const t1: Teacher = {
    id: "t1",
    name: "t1",
    level: "junior",
    courses: {
        [5]: {
            id: 5,
            title: "Fifth",
            role: "teacher"
        },
        [1]: {
            ...s1.courses[1],
            role: "teacher"
        }
    }
}

const d1: Director = {
    id: "d1",
    name: "d1",
    students: {
        ["s1"]: s1,
        ["s2"]: {
            id: "s2",
            name: "s2"
        }
    },
    teachers: {
        ["t1"]: {
            ...t1,
            rate: 3,
        },
        ["t2"]: {
            id: "t2",
            name: "t2",
            level: "senior",
            rate: 5
        }
    }
}

/* --- */