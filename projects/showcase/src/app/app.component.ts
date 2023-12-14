import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiSdkComponent } from '@mycomp/ui-sdk';
import { ButtonComponent } from '@mycomp/ui-sdk/button';
import { TranslatePipe } from '@mycomp/ui-sdk/i18n';
import { SummaryBannerComponent } from '@mycomp/ui-sdk/summary-banner'
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [CommonModule, UiSdkComponent, ButtonComponent, TranslatePipe, HeaderComponent, SummaryBannerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'showcase';
  summaryjson = [{
    status: "Completed",
    count: 12,
    id: 456,
    color: 'text-green-400',
    borderColor:'border-red-500'
  },
  {
    status: "Progress",
    count: 6,
    id: 456,
    color: 'text-orange-400',
    borderColor:'border-red-500'
  },
  {
    status: "Success",
    count: 3,
    id: 456,
    color: 'text-yellow-400',
    borderColor:'border-red-500'
  },
  {
    status: "Pending",
    count: 3,
    id: 456,
    color: 'text-yellow-400',
    borderColor:'border-red-500'
  },
  {
    status: "Error",
    count: 3,
    id: 456,
    color: 'text-red-400',
    borderColor:'border-red-500'
  },
]
clickEvent(event:any){
  //console.log("****one",event);
  
}
onItemClick(event:any){
  console.log("****two",event);
 // console.log("****three",event.target.value);
  
}
}
