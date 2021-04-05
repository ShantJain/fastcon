import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { WooCommerceProvider, LoadingProvider, ToastProvider, SettingsProvider } from 'src/app/services/providers';
import { ReasonsComponent } from './reasons/reasons.component';

@Component({
  selector: 'app-orderitems',
  templateUrl: './orderitems.page.html',
  styleUrls: ['./orderitems.page.scss'],
})
export class OrderitemsPage implements OnInit {
  public data:any;
  public action:string;
  public order_id:string;
  public itemsActions:string;
  public reason:any;
  public selReason:string;
  public seltag:string;
  constructor(  public nav: NavController,
    private route: ActivatedRoute,
    private loader:LoadingProvider,
    private toast: ToastProvider,
    private modalCanl:ModalController,
    public settings: SettingsProvider,
    private WC: WooCommerceProvider) { 
    this.route.queryParams.subscribe(params => {
      this.data  = JSON.parse(params.items) ;
      this.action  = params.action ;
      this.order_id = params.order_id ;
      this.getActionSettings()
    });
  }
  backHome(){
    this.nav.back();
  }
  getActionSettings(){
    this.loader.show();
    this.WC.getOrderItemsReason().then(
      (res: any) => {
        if(this.action=="0"){
          this.reason = res.data.cancel.reason;
        }else{
          this.reason = res.data.exchange.reason;
        }
        this.loader.dismiss();
      },
      (err) => {
        this.loader.dismiss();
        this.toast.showError();
      }
    );
  }
  openReasonBox(subRes){
    this.seltag = subRes.tag;
    this.presentModal(subRes)
  }
  cancelItems(type){
       if(this.selReason==""){
         this.toast.show("please select Reason");
          return false;
       }
      if(type==0){
        this.loader.show();
        this.WC.getOrderItemsCancel(this.order_id,this.data.id,this.selReason,"cancel").then(
          (res: any) => {
            console.log(res);
            this.toast.show("Order request update");
            this.loader.dismiss();
            this.nav.back();
          
          },
          (err) => {
            console.log(err);
            this.loader.dismiss();
            var ee = JSON.parse(err.error);
            this.toast.show(ee.data);
          }
        );
      }else{
        if(this.itemsActions=="1"){
          this.loader.show();
          this.WC.getOrderItemsExchange(this.order_id,this.data.id,this.selReason,"exchange").then(
            (res: any) => {
              this.nav.back();
              this.toast.show("Order request update");
              this.loader.dismiss();
            },
            (err) => {
              this.loader.dismiss();
              var ee = JSON.parse(err.error);
              this.toast.show(ee.data);
            }
          );
        }else{
          this.loader.show();
          this.WC.getOrderItemsReturn(this.order_id,this.data.id,this.selReason,"refund").then(
            (res: any) => {
              console.log(res);
              this.toast.show("Order request update");
              this.nav.back();
              this.loader.dismiss();
            },
            (err) => {
              console.log(err);
              var ee = JSON.parse(err.error);
              this.loader.dismiss();
              this.toast.show(ee.data);
            }
          );
        }
      }
  }
  async presentModal(reasons) { 
    const modal = await this.modalCanl.create({
      component: ReasonsComponent,
      componentProps:{ "data":JSON.stringify(reasons) },
      cssClass:'ReasonsBox'
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    console.log(data);
    this.selReason = data.data.element;
  }
  ngOnInit() {

  }

}
