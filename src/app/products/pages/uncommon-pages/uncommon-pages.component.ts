import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-pages',
  templateUrl: './uncommon-pages.component.html',
  styleUrls: ['./uncommon-pages.component.css']
})
export class UncommonPagesComponent {
  // i18n Select

  public name:string = 'Fernando';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male':'invitarlo',
    'female':'invitarla'
  }
  changeClient(){
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18nPlural
  public clients:string[] = ['Maria','Pedro','Fernando','Hernando','Eduardo', 'Melissa','Natalia'];
  public clientsMap = {
    '=0':'no tenemos ningún cliente esperando.',
    '=1':'tenemos 1 cliente esperando.',
    'other':'tenemos # clientes esperando.',
  }
  deleteClient():void{
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name:'Fernando',
    age:36,
    address: 'Ottawa, Canada'
  }

  //Async Pipe
  public myObservableTimer:Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap:',value))
  );

  public promiseValue:Promise<string> = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data en la promesa.');
    }, 6500);
  })
}
