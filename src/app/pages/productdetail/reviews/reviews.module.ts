import { PipesModule } from './../../../pipes/pipes.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { ReviewsPage } from './reviews';
import { IonicRatingModule } from 'ionic4-rating';
import { AddReviewPage } from './add-review/add-review';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ReviewsPage,AddReviewPage
  ],
  entryComponents:[AddReviewPage,ReviewsPage],
  exports:[AddReviewPage,ReviewsPage],
  imports: [
    CommonModule,IonicModule,
    TranslateModule.forChild(),
    PipesModule,
    IonicRatingModule 
  ],
})
export class ReviewsPageModule {}
