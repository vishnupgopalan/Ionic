import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
//import { Header } from 'ionic-angular/components/toolbar/toolbar-header';
//import { errorHandler } from '@angular/platform-browser/src/browser';

//Base Url and Api key.
let baseUrl='https://dev2api.carecamhealthsystems.com/v4/';
let apiKey='B6BADA56-622C-43C4-A7C8-B23C316C8262';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }
  postData(credentials,type) 
  {
    
    var cred = credentials.username + ':' + credentials.password;
    //var auth = btoa(encodeURIComponent(cred));
    var auth = btoa(cred);
    // createAuthorizationHeader(headers: Headers) {
    //   headers.append('Authorization', 'Basic ' +
    //     btoa('username:password')); 
    // }
    let headers=new Headers();
    headers.append('Authorization', 'Basic ' +auth)
    return new Promise((resolve,reject)=>{
     
      console.log('calling login api  ');
      this.http.get(baseUrl+type+'?apiKey='+apiKey,{headers:headers})
      .subscribe(res=>{
        resolve(res.json);
      },
      (err)=>{reject(err);
      });
    });    
  }  
}

//return $.ajax({
  //     url: config.remoteServiceName + 'login',
  //     type: 'GET',
  //     async: true,
  //     beforeSend: function (xhr) {
  //         var cred = userName + ':' + password;
  //         var auth = btoa(unescape(encodeURIComponent(cred)));
  //      