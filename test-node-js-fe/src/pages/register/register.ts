import { UsuarioService } from './../../providers/usuario-service';
import { Component } from '@angular/core';
import { NavController, AlertController, NavParams, ToastController, LoadingController, Loading } from 'ionic-angular';
import { ListaUsuariosPage } from '../../pages/lista-usuarios/lista-usuarios';

/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export class Usuario {
  nome: string;
  email: string;
  senha: string;
 
  constructor(nome: string, email: string, senha: string) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }
}
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  newUsuario: Usuario;
  loading: Loading;
  
  
  registerCredentials = {nome: '', email: '', senha: '', confirmarSenha: ''};
 
  constructor(private nav: NavController, 
  private usuarioService: UsuarioService, private alertCtrl: AlertController, private loadingCtrl: LoadingController, private toastCtrl: ToastController) {}
 
 
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }
  
  public addUsuario() {
    
    if (this.registerCredentials.senha != this.registerCredentials.confirmarSenha) {
        this.showToast('Senha não confere!');
    } else {
        this.showLoading();
        this.newUsuario = new Usuario(
            this.registerCredentials.nome,
            this.registerCredentials.email,
            this.registerCredentials.senha
            );
        
        this.usuarioService.addUsuario(this.newUsuario).subscribe(data => {
            setTimeout(() => {
                this.loading.dismiss();
                // this.showToast(data.msg);
                this.loadUsuarios();    
            });
        });
        
    }    
  }
  
  private loadUsuarios() {
    console.log('this.nav.setRoot(ListaUsuariosPage)');
    this.nav.setRoot(ListaUsuariosPage)
  }
 
  private showToast(message: string) {
    if (this.loading != null) {
        this.loading.dismiss();
    }
    
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

}
