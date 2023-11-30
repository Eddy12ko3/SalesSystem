import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataSalesSystemService } from 'src/app/services/controller/data-sales-system.service';
import { isNumber } from 'src/utils/proyect.utils';
interface SalesProduct {
	code: string;
	name: string;
	stock: number;
	price: number;
	priceTotal: number;
	cant: number;
}
interface DBSalesProduct extends SalesProduct {
	id: number;
}
interface SalesProductCalc extends SalesProduct {
	typeDiscount: number;
	valueDiscount: number;
}

@Component({
	selector: 'app-shopping-cart',
	templateUrl: './shopping-cart.component.html',
	styleUrl: './shopping-cart.component.css',
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
	private impuesto: number = 0.18;
	listSales: Array<SalesProductCalc> = new Array<SalesProductCalc>();
	private DB_listSales: Array<DBSalesProduct> = new Array<DBSalesProduct>();
	private suscriptionEventAddProduct?: Subscription;
	constructor(private dataSalesSystemService: DataSalesSystemService) {}
	ngOnInit(): void {
		this.DB_listSales.push({
			id: 1,
			name: 'AeroPhone X20',
			price: 1200,
			cant: 1,
			priceTotal: 1200,
			code: 'asdasdasdasd',
			stock: 2,
		});
		this.DB_listSales.push({
			id: 2,
			name: 'QuantumBook Pro',
			price: 2500,
			cant: 1,
			priceTotal: 2500,
			code: 'asdasdasdasd',
			stock: 2,
		});
		this.DB_listSales.push({
			id: 3,
			name: 'VirtuGlass VR',
			price: 800,
			cant: 1,
			priceTotal: 800,
			code: 'asdasdasdasd',
			stock: 2,
		});
		this.DB_listSales.push({
			id: 4,
			name: 'NanoFit Band',
			price: 300,
			cant: 1,
			priceTotal: 300,
			code: 'asdasdasdasd',
			stock: 2,
		});
		this.DB_listSales.push({
			id: 5,
			name: 'SkyDrone 360',
			price: 1500,
			cant: 1,
			priceTotal: 1500,
			code: 'asdasdasdasd',
			stock: 2,
		});
		this.DB_listSales.push({
			id: 6,
			name: 'EcoSmart Fridge',
			price: 2000,
			cant: 1,
			priceTotal: 2000,
			code: 'asdasdasdasd',
			stock: 2,
		});
		this.DB_listSales.push({
			id: 7,
			name: 'RoboChef 5000',
			price: 3000,
			cant: 1,
			priceTotal: 3000,
			code: 'asdasdasdasd',
			stock: 2,
		});
		this.DB_listSales.push({
			id: 8,
			name: 'CleanAir Home System',
			price: 1000,
			cant: 1,
			priceTotal: 1000,
			code: 'asdasdasdasd',
			stock: 2,
		});
		this.DB_listSales.push({
			id: 9,
			name: 'AquaPower Shower',
			price: 500,
			cant: 1,
			priceTotal: 500,
			code: 'asdasdasdasd',
			stock: 2,
		});
		this.DB_listSales.push({
			id: 10,
			name: 'GalaxyPad Flex',
			price: 1100,
			cant: 1,
			priceTotal: 1100,
			code: 'asdasdasdasd',
			stock: 2,
		});
		this.DB_listSales.push({
			id: 11,
			name: 'SolarCharge Backpack',
			price: 250,
			cant: 1,
			priceTotal: 250,
			code: 'asdasdasdasd',
			stock: 2,
		});
		this.DB_listSales.push({
			id: 12,
			name: 'SoundSphere 360',
			price: 450,
			cant: 1,
			priceTotal: 450,
			code: 'asdasdasdasd',
			stock: 2,
		});
		this.DB_listSales.push({
			id: 13,
			name: 'MindLink Headset',
			price: 550,
			cant: 1,
			priceTotal: 550,
			code: 'asdasdasdasd',
			stock: 2,
		});
		this.DB_listSales.push({
			id: 14,
			name: 'HomeBot Assistant',
			price: 2200,
			cant: 1,
			priceTotal: 2200,
			code: 'asdasdasdasd',
			stock: 2,
		});
		this.DB_listSales.push({
			id: 15,
			name: 'CyberGlove Interactive',
			price: 600,
			cant: 1,
			priceTotal: 600,
			code: 'asdasdasdasd',
			stock: 2,
		});
		this.listSales.push({
			code: 'AeroPhone X20',
			name: 'AeroPhone X20',
			price: 1200,
			stock: 5,
			cant: 1,
			typeDiscount: -1,
			valueDiscount: 0,
			priceTotal: 1200,
		});
		this.listSales.push({
			code: 'QuantumBook Pro',
			name: 'QuantumBook Pro',
			price: 2500,
			stock: 5,
			cant: 1,
			typeDiscount: -1,
			valueDiscount: 0,
			priceTotal: 2500,
		});
		this.listSales.push({
			code: 'VirtuGlass VR',
			name: 'VirtuGlass VR',
			price: 800,
			stock: 5,
			cant: 1,
			typeDiscount: -1,
			valueDiscount: 0,
			priceTotal: 800,
		});
		this.listSales.push({
			code: 'NanoFit Band',
			name: 'NanoFit Band',
			price: 300,
			stock: 5,
			cant: 1,
			typeDiscount: -1,
			valueDiscount: 0,
			priceTotal: 300,
		});
		this.listSales.push({
			code: 'SkyDrone 360',
			name: 'SkyDrone 360',
			price: 1500,
			stock: 5,
			cant: 1,
			typeDiscount: -1,
			valueDiscount: 0,
			priceTotal: 1500,
		});
		this.listSales.push({
			code: 'EcoSmart Fridge',
			name: 'EcoSmart Fridge',
			price: 2000,
			stock: 5,
			cant: 1,
			typeDiscount: -1,
			valueDiscount: 0,
			priceTotal: 2000,
		});
		this.listSales.push({
			code: 'RoboChef 5000',
			name: 'RoboChef 5000',
			price: 3000,
			stock: 5,
			cant: 1,
			typeDiscount: -1,
			valueDiscount: 0,
			priceTotal: 3000,
		});
		this.listSales.push({
			code: 'codeCleanAir Home System',
			name: 'CleanAir Home System',
			price: 1000,
			stock: 5,
			cant: 1,
			typeDiscount: -1,
			valueDiscount: 0,
			priceTotal: 1000,
		});
		this.listSales.push({
			code: 'AquaPower Shower',
			name: 'AquaPower Shower',
			price: 500,
			stock: 5,
			cant: 1,
			typeDiscount: -1,
			valueDiscount: 0,
			priceTotal: 500,
		});
		this.listSales.push({
			code: 'GalaxyPad Flex',
			name: 'GalaxyPad Flex',
			price: 1100,
			cant: 1,
			stock: 5,
			typeDiscount: -1,
			valueDiscount: 0,
			priceTotal: 1100,
		});
		this.listSales.push({
			code: 'SolarCharge Backpack',
			name: 'SolarCharge Backpack',
			price: 250,
			cant: 1,
			stock: 5,
			typeDiscount: -1,
			valueDiscount: 0,
			priceTotal: 250,
		});
		this.listSales.push({
			code: 'SoundSphere 360',
			name: 'SoundSphere 360',
			price: 450,
			stock: 5,
			cant: 1,
			typeDiscount: -1,
			valueDiscount: 0,
			priceTotal: 450,
		});
		this.listSales.push({
			code: 'MindLink Headset',
			name: 'MindLink Headset',
			price: 550,
			stock: 5,
			cant: 1,
			typeDiscount: -1,
			valueDiscount: 0,
			priceTotal: 550,
		});
		this.listSales.push({
			code: 'HomeBot Assistant',
			name: 'HomeBot Assistant',
			price: 2200,
			stock: 5,
			cant: 1,
			typeDiscount: -1,
			valueDiscount: 0,
			priceTotal: 2200,
		});
		this.listSales.push({
			code: 'CyberGlove Interactive',
			name: 'CyberGlove Interactive',
			price: 600,
			stock: 5,
			cant: 1,
			typeDiscount: -1,
			valueDiscount: 0,
			priceTotal: 600,
		});

		this.suscriptionEventAddProduct = this.dataSalesSystemService.eventAddProduct.subscribe(
			(id) => {
				const item = this.DB_listSales.find((x) => x.id == id);
				if (item) {
					this.listSales.push({
						cant: item.cant,
						code: item.name,
						name: item.name,
						price: item.price,
						priceTotal: item.priceTotal,
						stock: 5,
						typeDiscount: -1,
						valueDiscount: 0,
					});
				}
			},
		);
	}
	ngOnDestroy(): void {
		this.suscriptionEventAddProduct?.unsubscribe();
		this.suscriptionEventAddProduct = undefined;
	}
	onClickDecrease(index: number) {
		const product = this.listSales.at(index);
		if (product && product.cant > 0) product.cant--;
		this.refreshPrice(index);
	}
	onClickIncrease(index: number) {
		const product = this.listSales.at(index);
		if (product) product.cant++;
		this.refreshPrice(index);
	}
	onClickRemove(index: number) {
		this.listSales.splice(index, 1);
	}
	onChangeCant(index: number) {
		const product = this.listSales.at(index);
		if (product) {
			this.refreshPrice(index);
		}
	}
	onClickClearCart() {
		this.listSales = [];
	}
	refreshPrice(index: number) {
		const product = this.listSales.at(index);
		if (product) {
			product.priceTotal = product.price * product.cant;
			if (!isNumber(product.valueDiscount) || product.valueDiscount < 0)
				product.valueDiscount = 0;
			else if (product.valueDiscount > 0) {
				// Descuento por porcentaje
				if (product.typeDiscount == 0) {
					product.priceTotal =
						product.priceTotal - product.priceTotal * (product.valueDiscount / 100);
				}
				// Descuento por valor numérico
				else if (product.typeDiscount == 1) {
					product.priceTotal -= product.valueDiscount;
				}
			}
		}
	}
	get priceTotalBuy(): number {
		let price = 0;
		this.listSales.forEach((x) => {
			price += x.priceTotal;
		});
		return price;
	}
	get subPriceTotalBuy(): number {
		return this.priceTotalBuy - this.igvPriceTotalBuy;
	}
	get igvPriceTotalBuy(): number {
		return this.priceTotalBuy * this.impuesto;
	}
}
