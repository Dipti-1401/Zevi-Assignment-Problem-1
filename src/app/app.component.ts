import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Problem_1_Zevi_Assignment';
r1b: boolean = false;
r1i: boolean = false;
r1u: boolean = false;
r2b: boolean = false;
r2i: boolean = false;
r2u: boolean = false;
  r3u: boolean = false;
  r4u: boolean = false;
  r3i: boolean = false;
  r4i: boolean = false;
  r3b: boolean = false;
  r4b: boolean = false;

  r1f?:number;
  r1c: string = "black";

  r2f?:number;
  r2c: string = "black";

  r3f?:number;
  r3c: string = "black";

  r4f?:number ;
  r4c: string = "black";


bold(x:number){
  if(x == 1){
    this.r1b= true
  }
  else if(x == 2){
    this.r2b= true
  }
  else if(x == 3){
    this.r3b= true
  }
  else if(x == 4){
    this.r4b= true
  }
  

}

italic(x:number){
  if(x == 1){
    this.r1i= true
  }
  else if(x == 2){
    this.r2i= true
  }
  else if(x == 3){
    this.r3i= true
  }
  else if(x == 4){
    this.r4i= true
  }
}

underline(x:number){
  if(x == 1){
    this.r1u= true
  }
  else if(x == 2){
    this.r2u= true
  }
  else if(x == 3){
    this.r3u= true
  }
  else if(x == 4){
    this.r4u= true
  }
}

}
