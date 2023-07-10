import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public nameLower: string = 'romen';
  public nameUpper: string = 'ROMEN';
  public fullName: string = 'ROmEn';

  public customDate:Date = new Date();
}
