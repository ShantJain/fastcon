import { Injectable } from "@angular/core";
import { LoadingController } from "@ionic/angular";
//import { TranslateService } from "@ngx-translate/core";

@Injectable({
  providedIn: "root",
})
export class LoadingProvider {
  load: any;
  constructor(
    private loader: LoadingController //private translate: TranslateService
  ) {}

  async show(dismissOnPageChange = true) {
    // this.translate.get(["LOADING"]).subscribe(x => {
    this.load = await this.loader.create({
      //content: x.LOADING,
      // spinner: 'ios',
      cssClass: "loading-custom",
      message: `<div class="header">
                  </div>
                  <div class="content">
                    <div class="loader_outer">
                      <div class="loader">
                      </div>
                    </div>
                  </div>`,
      spinner: null,
      backdropDismiss: dismissOnPageChange,
    });

    await this.load.present();
    // });
  }

  async showWithMessage(msg: string) {
    this.load = await this.loader.create({
      //content: x.LOADING,
      // spinner: 'ios',
      cssClass: "loading-custom-msg",
      message: `<div class="header">
                  </div>
                  <div class="content">
                    <div class="loader_outer">
                      <div class="loader"></div></br>
                      ${msg}
                    </div>
                  </div>`,
      spinner: null,
      backdropDismiss: false,
    });
    await this.load.present();
  }

  async dismiss() {
    if (this.load) {
      await this.load.dismiss();
      this.load = null;
    }
  }

  dismissInstant() {
    this.load.dismiss();
  }
}
