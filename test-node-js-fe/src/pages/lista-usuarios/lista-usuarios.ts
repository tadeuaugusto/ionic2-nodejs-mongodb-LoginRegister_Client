import { UsuarioService } from './../../providers/usuario-service';
import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ListaUsuarios page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lista-usuarios',
  templateUrl: 'lista-usuarios.html'
})
export class ListaUsuariosPage {

    usuarios: Observable<any>;
    
    constructor(public navCtrl: NavController, public usuarioService: UsuarioService, public alertCtrl: AlertController, public toastCtrl: ToastController) {
        
    }
    
    ionViewDidLoad() {
        this.loadUsuarios();
    }
    
    loadUsuarios() {
        this.usuarios = this.usuarioService.getUsuarioList();
    }
      

}
