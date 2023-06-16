{
    type Constructor = new(...args: any[]) => {};
    type GConstructor<T = {}> = new(...args: any[]) => T;

    class List {
        constructor(public items: string[]) {
        }
    }

    type ListType = GConstructor<List>;

    class ExtendedListClass extends List {
        first() {
            return this.items[0]
        }
    }

// TBase - общепринятое название generic
    function ExtendedList<TBase extends ListType>(Base: TBase) {
        return class ExtendedList extends Base {
            first() {
                return this.items[0]
            }
        }
    }

    const list = ExtendedList(List);
    const res = new list(["some", "second", "another"]);
    console.log("res::first", res.first());
}

{
    type GConstructor<T = {}> = new(...args: any[]) => T;

    class List {
        constructor(public items: string[]) {
        }
    }

    class Accordion {
        isOpened: boolean;
    }

    type ListType = GConstructor<List>;
    type AccordionType = GConstructor<List>;

    function ExtendedList<TBase extends ListType & AccordionType>(Base: TBase) {
        return class ExtendedList extends Base {
            isOpened: boolean;

            first() {
                return this.items[0];
            }
        }
    }

    class AccordionList {
        isOpened: boolean;

        constructor(public items: string[]) {
        }
    }

    const list = ExtendedList(AccordionList);
    const res = new list(["some", "second", "another"]);
    console.log("res::first::",res.first());

}