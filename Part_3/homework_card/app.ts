enum EDeliveryType {
    home,
    market,
}

interface IDelivery {
    type: EDeliveryType,
    date: Date,

    send(productsList: Product[]): void,
}


class Delivery implements IDelivery {
    public date: Date;

    constructor(public type: EDeliveryType, d?: Date) {
        this.type = type;
        if (d) {
            this.date = d;
        }
    }

    send(productsList: Product[]): void {
        if (this.type === undefined) throw new Error("Выберите тип доставки");
        console.log("productsList.length::", productsList.length);
        if (!productsList.length) throw new Error("Список товаров для доставки пуст");
        console.log(this)
    }
}

class DeliveryToHome extends Delivery {

    constructor(d: Date, public address: string) {
        super(EDeliveryType.home, d);
    }

    override send(productsList: Product[]) {
        super.send(productsList);
        console.log(`Отправляем товары по адресу "${this.address}"`);
    }
}

class DeliveryToMarket extends Delivery {

    constructor(public shopId: number) {
        super(EDeliveryType.market, new Date());
    }

    override send(productsList: Product[]) {
        super.send(productsList);
        console.log(`Отправляем товары в магазин номер "${this.shopId}"`);
    }
}

enum ECartCheckout {
    Ok = "ok",
    PriceError = "priceError",
    ProductsListEmpty = "productsListEmpty",
    DeliveryNotChose = "deliveryNotChose",
}


class Cart {
    private _productsList: Product[] = [];

    // Создаём список поддерживаемых доставок для Корзины
    #delivery: DeliveryToHome | DeliveryToMarket;

    set delivery(delivery) {
        this.#delivery = delivery;
    }

    get delivery() {
        return this.#delivery;
    }

    get productsList(): Product[] {
        return [...this._productsList];
    }

    addProduct(p: Product | [Product, ...Product[]]): void {
        if (p instanceof Array) this._productsList.push(...p);
        else this._productsList.push(p);
    }

    clearProductsList(): void {
        this._productsList = [];
    }

    deleteProductById(productId: number): boolean {
        let _findProduct = false;

        for (let i: number = 0; this._productsList.length > i; i++) {
            const p = this._productsList[i];
            if (p.id !== productId) continue;
            this._productsList.splice(i, 1);
            i--;
            _findProduct = true;
        }

        return _findProduct;
    }

    get totalSum(): number {
        return this._productsList.reduce((sum: number, p: Product) => p.price + sum, 0)
    }

    get checkout(): ECartCheckout {
        if (!this.delivery) return ECartCheckout.DeliveryNotChose;
        if (this._productsList.length === 0) return ECartCheckout.ProductsListEmpty
        if (this.totalSum <= 0) return ECartCheckout.PriceError;

        return ECartCheckout.Ok;
    }

    orderDelivery() {
        const checkout = this.checkout;
        console.log("checkout::", checkout);
        if (checkout !== ECartCheckout.Ok) throw new Error(checkout)

        this.delivery.send(this.productsList);
        this.clearProductsList();
        return this.delivery;
    }
}

class Product {
    readonly id: number;

    constructor(public name: string, public price: number) {
        if (price <= 0) throw new Error("У продукта должна быть стоимость");
        this.id = Math.random();
    }
}


const productGreenApple = new Product("Зелёное яблоко", 50);
const productRedApple = new Product("Красное яблоко", 75);
const productMilk = new Product("Молоко", 20);
const productBanana = new Product("Банан", 3);

const cart = new Cart();
cart.addProduct(productMilk);
cart.addProduct([productGreenApple, productRedApple, productGreenApple]);
cart.addProduct([productBanana, productBanana, productBanana, productBanana, productBanana]);
console.log("cart::productList", cart.productsList);
cart.deleteProductById(productBanana.id);
console.log("cart::productList", cart.productsList);

cart.delivery = new DeliveryToHome(new Date(), "Третий дом, после гусятника")
// cart.delivery = new DeliveryToMarket(112)

cart.orderDelivery();