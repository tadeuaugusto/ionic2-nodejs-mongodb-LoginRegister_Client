import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { ListaUsuariosPage } from '../pages/lista-usuarios/lista-usuarios';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AppSettings } from './../providers/app-settings';
import { TodoService } from './../providers/todo-service'
import { UsuarioService } from './../providers/usuario-service'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    ListaUsuariosPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    ListaUsuariosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UsuarioService, TodoService, AppSettings, {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
