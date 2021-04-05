import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home', 
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },{
    path: 'product',
    loadChildren: () => import('./pages/product/product.module').then( m => m.ProductPageModule)
  },{
    path: 'imageGallery',
    loadChildren: () => import('./pages/image-gallery/image-gallery.module').then( m => m.ImageGalleryPageModule)
  },{
    path: 'categories',
    loadChildren: () => import('./pages/categories/categories.module').then( m => m.CategoriesPageModule)
  },{
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule)
  },{
    path: 'orders',
    loadChildren: () => import('./pages/orders/orders.module').then( m => m.OrdersPageModule)
  },{
    path: 'downloads',
    loadChildren: () => import('./pages/downloads/downloads.module').then( m => m.DownloadsPageModule)
  },{
    path: 'walletPage',
    loadChildren: () => import('./pages/wallet/wallet.module').then( m => m.WalletPageModule)
  },{ 
    path: 'accountSetting',
    loadChildren: () => import('./pages/account-setting/account-setting.module').then( m => m.AccountSettingPageModule)
  },{
    path: 'address',
    loadChildren: () => import('./pages/address/address.module').then( m => m.AddressPageModule)
  },{
    path: 'faqPage',
    loadChildren: () => import('./pages/faq/faq.module').then( m => m.FaqPageModule)
  },{
    path: 'tosPage',
    loadChildren: () => import('./pages/tos/tos.module').then( m => m.TosPageModule)
  },{
    path: 'myCart',
    loadChildren: () => import('./pages/cart/cart.module').then( m => m.CartPageModule)
  },{
    path: 'productdetail',
    loadChildren: () => import('./pages/productdetail/productdetail.module').then( m => m.ProductdetailPageModule)
  },{
    path: 'orderDetail',
    loadChildren: () => import('./pages/orders/detail/detail.module').then( m => m.OrderDetailPageModule)
  },{
    path: 'wishlist',
    loadChildren: () => import('./pages/wishlist/wishlist.module').then( m => m.WishlistPageModule)
  },{
    path: 'referEarn',
    loadChildren: () => import('./pages/wallet/refer-earn/refer-earn.module').then( m => m.ReferEarnPageModule)
  },{
    path: 'checkout',
    loadChildren: () => import('./pages/checkout/checkout.module').then( m => m.CheckoutPageModule)
  },{
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'orderitems',
    loadChildren: () => import('./pages/orderitems/orderitems.module').then( m => m.OrderitemsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
