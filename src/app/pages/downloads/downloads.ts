import { TranslateService } from '@ngx-translate/core';
import { WooCommerceProvider, ToastProvider, LoadingProvider, UserProvider } from './../../services/providers';
import { Component, NgZone } from '@angular/core';
import { NavController,  Platform, AlertController } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';


@Component({
  selector: 'page-downloads',
  templateUrl: 'downloads.html',
  styleUrls: ['downloads.scss'],
})
export class DownloadsPage {
  downloads: any;
  storageDirectory: string = '';
  progress: any;
  constructor(public navCtrl: NavController,  public WC: WooCommerceProvider,
    public platform: Platform, public toast: ToastProvider, private file: File, private transfer: FileTransfer,
    private alertCtrl: AlertController, private zone: NgZone, private androidPermissions: AndroidPermissions,
    private loader: LoadingProvider, public user: UserProvider, public translate: TranslateService) {

    this.WC.getDownloads(user.id).then((data) => {
      console.log(data);
      this.zone.run(() => {
        this.downloads = data;
      });
    }, (err) => {
      toast.showError();
    });


    if (!this.platform.is('cordova')) {
      this.translate.get(['ONLY_DEVICE']).subscribe(x => {
        this.toast.show(x.ONLY_DEVICE);
        return;
      });
    }

    if (this.platform.is('ios')) {
      this.storageDirectory = this.file.documentsDirectory;
    }
    else if (this.platform.is('android')) {
      this.storageDirectory = this.file.externalRootDirectory;
    }

  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter DownloadsPage');
  }
  checkPermissionAndDownload(url, fileName) {
    if (!this.platform.is('cordova')) {
      this.translate.get(['ONLY_DEVICE', 'ONLY_DEVICE_DESC', 'OK']).subscribe(x => {
        this.presentAlert(x.ONLY_DEVICE,x.ONLY_DEVICE_DESC,"",[{
          text: x.OK
        }]);
      });
      return;
    }
    if (this.platform.is('android')) {
      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(
        result => {
          console.log('Has permission?', result.hasPermission);
          if (result.hasPermission) {
            this.downloadNow(url, fileName);
          }
        },
        err => {
          this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
        }
      );
    } else {
      this.downloadNow(url, fileName);
    }

  }
  downloadNow(url, fileName) {
    const fileTransfer: FileTransferObject = this.transfer.create();
    this.loader.show();
    this.translate.get(['OK', 'DOWNLOAD_SUCCESS', 'DOWNLOAD_FAILED']).subscribe((x) => {
      fileTransfer.download(url, this.storageDirectory + fileName).then((entry) => {
        this.loader.dismiss();
        this.presentAlert(x.DOWNLOAD_SUCCESS,fileName + ' was successfully downloaded to: ' + entry.toURL(),"",[x.OK]);
      }, (error) => {
        // handle error
        this.loader.dismiss();
        this.presentAlert(x.DOWNLOAD_FAILED,fileName + ' was not downloaded. Error code: ' + error.code,"",[x.OK]);
      });
      fileTransfer.onProgress((progress) => {
        this.progress = progress;
      });

    });

  }
  async presentAlert(header,message,cssClass,buttons) {
    const alert = await this.alertCtrl.create({
      header: header,
      cssClass: cssClass,
      message: message,
      buttons: buttons
    });

    await alert.present();
  }
}
