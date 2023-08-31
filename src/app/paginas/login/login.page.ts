import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public nav : NavController,
    public menu : MenuController) { 
   }

   ionViewWillEnter(){
    this.menu.enable(false); /* DEIXA O MENU LATERL DESATIVADO COMO PADRAO */
   }

   ionViewDidLeave(){
    this.menu.enable(true); /* AO SAIR DA TELA PADRAO, ATIVA O MENU LATERAL */
   }

  logar() {
    this.nav.navigateForward('home'); /* NAVEGA AO HOME DEPOIS DE LOGAR */
  }

  registrar() {
    this.nav.navigateForward('add-associado'); /* LEVA NA PAGINA DE REGISTRAR */
  }

  ngOnInit() {
  }

}
