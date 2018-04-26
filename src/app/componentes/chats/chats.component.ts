import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../providers/chat.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styles: []
})
export class ChatsComponent implements OnInit {

  mensaje: string="";
  elemento:any;

  constructor(public cs: ChatService) {
    this.cs.cargarMensajes().subscribe(()=>{
      setTimeout(()=>{
        this.elemento.scrollTop = this.elemento.scrollHeight;
      },20);
    });
   }
   ngOnInit(){
     this.elemento = document.getElementById('app-mensajes');
   }

  enviar_mensaje(){
    if(this.mensaje.length!=0 && this.mensaje!=""){
      this.cs.agregarMensaje(this.mensaje).then(()=>this.mensaje="");
    }
  }

}
