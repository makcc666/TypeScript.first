const data = [
    {
        id: 2,
        name: 'Петя'
    },
    {
        id: 1,
        name: 'Вася'
    },
    {
        id: 3,
        name: 'Надя'
    },
];

interface ISortById {
    id: number
}

function sortById<T extends ISortById>(dataArr: T[], sortBy: "desc" | "asc" = "desc"): T[] {
    return dataArr.sort((a, b) => {
        switch (sortBy){
            case "asc":
                return a.id - b.id;
            case "desc":
                return b.id - a.id;
        }
    });
}

console.log(
    sortById(
        [
            {id: 1},
            {id: 3},
            {id: 2},
        ],
        "asc"
    )
)