{
    interface IData {
        group: number;
        name: string;
    }

    const data: IData[] = [
        {
            group: 1,
            name: 'a'
        },
        {
            group: 1,
            name: 'b'
        },
        {
            group: 2,
            name: 'c'
        },
    ];

    interface IGroup<T> {
        [key: string]: T[],
    }

    type key = string | number | symbol;

    function groupByKey<T extends Record<key, any>>(listToGroup: Array<T>, keyOfGroup: keyof T): IGroup<T> {
        return listToGroup.reduce<IGroup<T>>((map: IGroup<T>, item) => {
            const itemKey = item[keyOfGroup];
            let curEl = map[itemKey];
            if (Array.isArray(curEl)) {
                curEl.push(item);
            } else {
                curEl = [item]
            }
            map[itemKey] = curEl;
            return map;
        }, {})
    }


    function groupByKey2<T extends Record<key, any>>(listToGroup: Array<T>, keyOfGroup: keyof T): IGroup<T> {
        const res = new Map<keyof T, T[]>();
        for (const item of listToGroup) {
            const record = res.get(keyOfGroup);
            if (Array.isArray(record)) record.push(item);
            else res.set(keyOfGroup, [item]);

        }
        return Object.fromEntries(res);
    }


    // groupByKey(data, "group");
    console.log(groupByKey2(data, "group"))
}