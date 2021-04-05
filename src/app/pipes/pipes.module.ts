import { MomentPipe } from './moment/moment';
import { MoneyPipe } from './money/money';
import { DiscountPipe } from './discount/discount';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
	declarations: [ 
		DiscountPipe,
		MoneyPipe,
		MomentPipe
	],
	imports: [CommonModule],
	exports: [
		DiscountPipe,
		MoneyPipe,
		MomentPipe
	]
})
export class PipesModule { }
