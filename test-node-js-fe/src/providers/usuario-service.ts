import { AppSettings } from './app-settings';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UsuarioService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UsuarioService {

  apiUrl = this.appSettings.getApiUrl();

  constructor(public http: Http, public appSettings: AppSettings) {
    console.log('Hello UsuarioService Provider');
  }
  
 
 
  public getUsuario(usuarioId) {
    return this.http.get(this.apiUrl + 'usuarios/' + usuarioId)
      .map(response => response.json());
  }
  
  public getUsuarioList() {
    return this.http.get(this.apiUrl + 'usuarios')
      .map(response => response.json().result);
  }
 
  public addUsuario(newUsuario) {
    
    console.log('CHAMANDO WEB SERVICE PARA addUsuario(newUsuario)');
    
    return this.http.post(this.apiUrl + 'register', {'usuario': newUsuario})
      .map(response => response.json());
      
    /*
    return this.http.post(this.apiUrl + 'usuarios', {'usuario': newUsuario})
      .map(response => response.json());
    */
  }
 
  public deleteUsuario(usuarioId) {
    return this.http.delete(this.apiUrl + 'usuarios/' + usuarioId)
      .map(response => response.json());
  }

}
