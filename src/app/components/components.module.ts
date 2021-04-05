import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SkeletonItemComponent } from './skeleton-item/skeleton-item';
import { CommonModule } from '@angular/common';
@NgModule({
	declarations: [SkeletonItemComponent],
	imports: [CommonModule,IonicModule],
	exports: [SkeletonItemComponent]
})
export class ComponentsModule {}
