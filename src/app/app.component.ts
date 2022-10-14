import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { delay, interval, map, Observable, retry, retryWhen, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private http:HttpClient ){}
  title = 'RxjsDemo';
  users$!:Observable<any>;
   user!:any;

   source=interval(2000);

  getUser(){

      this.http.get("https://api.github.com/users/pank1999")
      .pipe( 
            retry(4)
         )     
      .subscribe(
      res=>{
        console.log(res);
        this.user=res;
      }
    );


    // this.source.pipe(
    //    map(val=>{
    //       //console.log(val)
    //       if(val>5){
    //         throw val;
    //       }
    //       return val
    //    }),
    //    retryWhen(error=>
    //       error.pipe(
    //         tap(value=>console.log("retryWhen",value)),
    //         delay(5000)
    //       )
    //    )

    // ).subscribe(res=>console.log(res))
  }


}
