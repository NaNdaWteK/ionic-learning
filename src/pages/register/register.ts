import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InvitePage } from '../invite/invite';

const FRIENDS: any[] = [
  {
    name: 'Nacho',
    age: 37
  },
  {
    name: 'Miguel',
    age: 24
  }
]

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})


export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  goToInvitePage() {
    this.navCtrl.push( InvitePage, { 'friends': FRIENDS } );
  }

}
