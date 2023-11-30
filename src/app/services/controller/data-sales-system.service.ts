import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class DataSalesSystemService {
	private _eventAddProduct = new Subject<number>();
	get eventAddProduct(): Observable<number> {
		return this._eventAddProduct.asObservable();
	}
	set eventAddProduct(id: number) {
		this._eventAddProduct.next(id);
	}
	constructor() {}
}
