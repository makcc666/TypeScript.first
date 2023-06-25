abstract class DeliveryItem {
	items:DeliveryItem[] = [];

	addItems(item:DeliveryItem){
		this.items.push(item);
	}

	getItemPrices():number{
		return this.items.reduce((acc:number,item:DeliveryItem)=>acc+item.getPrice(),0)
	}

	abstract getPrice():number;
}

class DeliveryShop extends DeliveryItem {
	constructor(private deliveryFee:number) {
		super();
	}

	override getPrice(): number {
		return this.getItemPrices()+this.deliveryFee;
	}
}
class Package extends DeliveryItem {
	getPrice():number {
		return this.getItemPrices();
	}
}

class Product extends DeliveryItem{
	constructor(private price:number,) {
		super();
	}
	getPrice(): number {
		return this.price;
	}
}

const shop = new DeliveryShop(100);
shop.addItems(new Product(1500));

const pack1 = new Package();
pack1.addItems(new Product(50));
pack1.addItems(new Product(25));

const pack2 = new Package();
pack2.addItems(new Product(10));
pack2.addItems(new Product(512));

const pack3 = new Package();
pack3.addItems(new Product(1000));
pack3.addItems(new Product(20));
pack3.addItems(pack2);
shop.addItems(pack3);

console.log(shop.getItemPrices());