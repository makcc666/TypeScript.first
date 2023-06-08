class Vehicle {
    public make: string;
    private damages: string[] = [];
    private _model: string; // Доступен только внутри этого класса
    protected run: number; // Доступен при наследовании
    #price: number; // Приватная переменная. Работает не только в TS, но так-же и в JS после компиляции

    set model(m: string) {
        this._model = m;
    }

    get model() {
        return this._model;
    }

    set price(p: number) {
        this.#price = p;
    }
    get price(): number {
        return this.#price;
    }

    isEqPrice(v:Vehicle){
        return this.#price===v.#price;
    }

    addDamage(damage: string) {
        this.damages.push(damage)
    }
}

class EuroTruck extends Vehicle {


    setRun(km: number) {
        this.run = km * 0.62;
        // this.damages // error, не доступен из других классов, а так-же является приватным
    }
}

const euroTruck = new EuroTruck();
euroTruck.price = 111;
console.log("euroTruck.price::",euroTruck.price);