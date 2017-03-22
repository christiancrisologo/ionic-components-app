import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/*
  Generated class for the CompAlerts page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-comp-alerts',
  templateUrl: 'comp-alerts.html'
})
export class CompAlertsPage {

  dataprovider:any[] = [
    {
      label: "Basic Alert",
      value: 0
    },
    {
      label: "Prompt Alert",
      value: 1
    },
    {
      label: "Confirmation Alert",
      value: 2
    },
    {
      label: "Radio Alert",
      value: 3
    },
    {
      label: "Checkbox Alert",
      value: 4
    } 

    ];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController) { 
        
    }

  itemSelected(item){
    
    switch(item.value){
      case 0:
        this.basicAlert();
      break;
      case 1:
        this.promptAlert();
      break;
      case 2:
        this.confirmationAlert();
      break;
      case 3:
        this.radioAlert();
      break;
      case 4:
        this.checkboxAlert();
      break;
    }
  }

  basicAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
   
  }


  promptAlert() {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          label: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  confirmationAlert() {
    let confirm = this.alertCtrl.create({
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  testRadioOpen: boolean;
  testRadioResult: any;

  radioAlert() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Lightsaber color');

    alert.addInput({
      type: 'radio',
      label: 'Blue',
      value: 'blue',
      checked: true
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });
    alert.present();
  }


  testCheckboxOpen:boolean;
  testCheckboxResult:any
  ;
  checkboxAlert() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Which planets have you visited?');

    alert.addInput({
      type: 'checkbox',
      label: 'Alderaan',
      value: 'value1',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Bespin',
      value: 'value2'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Checkbox data:', data);
        this.testCheckboxOpen = false;
        this.testCheckboxResult = data;
      }
    });
    alert.present();
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad CompAlertsPage');
  }

}
