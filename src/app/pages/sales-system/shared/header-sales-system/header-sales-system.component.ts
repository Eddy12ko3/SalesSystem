import { Component, OnInit } from '@angular/core';
import { DataSalesSystemService } from 'src/app/services/controller/data-sales-system.service';

@Component({
	selector: 'app-header-sales-system',
	templateUrl: './header-sales-system.component.html',
	styleUrls: ['./header-sales-system.component.css'],
})
export class HeaderSalesSystemComponent implements OnInit {
	dataSelect2_listProducts: Array<{ value: number; label: string }> = [];
	selectProductData: number = 0;
	constructor(private dataSalesSystemService: DataSalesSystemService) {}

	ngOnInit(): void {
		this.dataSelect2_listProducts.push({
			value: 1,
			label: '[ow41654fd] AeroPhone X20',
		});
		this.dataSelect2_listProducts.push({
			value: 2,
			label: '[s3d5f4web] QuantumBook Pro',
		});
		this.dataSelect2_listProducts.push({
			value: 3,
			label: '[1s32g1ghm] VirtuGlass VR',
		});
		this.dataSelect2_listProducts.push({
			value: 4,
			label: '[df3g21bbc] NanoFit Band',
		});
		this.dataSelect2_listProducts.push({
			value: 5,
			label: '[df32g13df] SkyDrone 360',
		});
		this.dataSelect2_listProducts.push({
			value: 6,
			label: '[2f1g23dfg] EcoSmart Fridge',
		});
		this.dataSelect2_listProducts.push({
			value: 7,
			label: '[dfg321dfm] RoboChef 5000',
		});
		this.dataSelect2_listProducts.push({
			value: 8,
			label: '[pofgk532g] CleanAir Home System',
		});
		this.dataSelect2_listProducts.push({
			value: 9,
			label: '[dfg23df1g] AquaPower Shower',
		});
		this.dataSelect2_listProducts.push({
			value: 10,
			label: '[sdpor5b21] GalaxyPad Flex',
		});
		this.dataSelect2_listProducts.push({
			value: 11,
			label: '[df3g21d23] SolarCharge Backpack',
		});
		this.dataSelect2_listProducts.push({
			value: 12,
			label: '[488gbdyjf] SoundSphere 360',
		});
		this.dataSelect2_listProducts.push({
			value: 13,
			label: '[ewr32t1er] MindLink Headset',
		});
		this.dataSelect2_listProducts.push({
			value: 14,
			label: '[32t1pokrn] HomeBot Assistant',
		});
		this.dataSelect2_listProducts.push({
			value: 15,
			label: '[try321j32] CyberGlove Interactive',
		});
	}
	onClickSelectProduct() {
		console.log(this.selectProductData);
		this.dataSalesSystemService.eventAddProduct = this.selectProductData;
	}
	onChangeProduct(event: any) {
		console.log('click: ', event);
		this.selectProductData = event.value;
	}
}
