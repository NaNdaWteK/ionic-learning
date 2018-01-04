import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ViewContainerData } from '@angular/core/src/view';

@IonicPage()
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {

  public art: any = {}

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
  }

  ionViewDidLoad() {
    this.art = this.navParams.get('art')
  }

  close() {
    this.viewCtrl.dismiss(this.art);
  }

  show() {
    this.viewCtrl.dismiss({show: true})
  }

}
