import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertPage } from '../alert/alert';

/**
 * Generated class for the InvitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invite',
  templateUrl: 'invite.html',
})
export class InvitePage {

  public friends: any[] = [];
  public show: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
    ) {
    
  }

  ionViewDidLoad() {
    this.friends = this.navParams.get('friends')
  }

  cleanNavControllerStack() {
    this.navCtrl.setRoot(HomePage)
  }

  showGreatAlert() {
    let modal = this.modalCtrl.create(AlertPage, {art: {
     message: '¿Quieres ver esta obra?',
     accept: 'Yes',
     dismiss: 'No'
      }
    });
    modal.onDidDismiss(data => {
      this.show = data.show
      this.showAction()
    });
    modal.present()
  }

  showAction() {
    if(this.show) console.log('execute show function')
  }

}
