import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
/*
  Generated class for the CompActionsheet page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-comp-actionsheet',
  templateUrl: 'comp-actionsheet.html'
})
export class CompActionsheetPage {

  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  public actionSheetCtrl: ActionSheetController,
  ) {}


  showActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad CompActionsheetPage');
  }



}
