import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';


@Component({
  selector: 'page-home',
  templateUrl: 'login.html'
})
export class Login {

  ResponseData : any;
  userData={"username":"","password":""}
  // var userId = data.userId || null,
  // entityId = data.entityId,
  // active = data.active,
  // firstName = data.firstName,
  // lastName = data.lastName,
  // credentials = data.credentials || '',
  // title = data.title || '',
  // specialty = data.specialty || undefined,
  // emailAddress = data.emailAddress || '',
  // roleId = data.roleId,
  // firstTime = data.firstTime,
  // lastLoginDt = data.lastLoginDt,
  // auth = btoa(userName + ":" + password),
  // functionList = data.functionList || null,
  // systemParameters = data.systemParameter || null,
  // consent = data.consent || [],
  // authToken = data.authToken;

  constructor(public navCtrl: NavController,public authServiceProvider:AuthServiceProvider) {

  }
  login() {

    this.authServiceProvider.postData(this.userData,'login').then(
      (result)=>{this.ResponseData=result; localStorage.setItem('authData',JSON.stringify(this.ResponseData))
      this.navCtrl.push(HomePage);
    },err=>{
      console.log('invalid Credential');
    }
  );

    
    
  }
}
