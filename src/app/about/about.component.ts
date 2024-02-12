import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as qrcode from 'qrcode';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent  {

  // url: string = '';
  // body: string = '';
  // response: any;
  // method: string = 'GET';
  // product: any | undefined;

  // constructor(private http: HttpClient) { }

  // onSubmit() {
  //   if (this.method === 'GET') {
  //     // this.http.get(`${this.url}`).subscribe(response => {
  //     //   this.response = JSON.stringify(response);
  //       let response = this.http.get(`${this.url}`);
  //       response.subscribe((response)=>this.response=JSON.stringify(response));
      
  //     }
  //   //    else if (this.method === 'POST') {
  //   //   // this.http.post(`/api/${this.url}`, this.body).subscribe(response => {
  //   //   //   this.response = JSON.stringify(response);
  //   //   let response=this.http.post(`${this.url}`,`${this.body}`);
  //   //   response.subscribe((response)=>this.response=JSON.stringify(response));
      
  //   // }
  //   else if (this.method === 'POST') {
  //     let headers = new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     });
  //     let response = this.http.post(`${this.url}`, this.body, { headers: headers });
  //     response.subscribe((response) => this.response = JSON.stringify(response));
  //   }
  // }

}


















  
  // errorMessage: string | null = null;
  // requestBody: any = null;
  // baseUrl: string = '';
  // endpoint: string = '';
  // observable: Observable<any> = of(null);

  // url: string = '';
  // method: string = 'GET';
  // headers: string = '';
  // body: string = '';
  // response: any = null;

  // constructor(private http: HttpClient) { }

//   submitForm() {
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         ...JSON.parse(this.headers)
//       })
//     };

//     let requestBody = null;

//     try {
//       requestBody = JSON.parse(this.body);
//     } catch (error) {
//       requestBody = this.body;
//     }

//     this.http.request(this.method, this.url, {
//       body: requestBody,
//       ...httpOptions
//     }).subscribe((response: any) => {
//       this.response = response;
//     }, (error: any) => {
//       this.response = error;
//     });
//   }
// }

// submitForm() {
//   this.errorMessage = null;
//   this.response = null;
//   const options = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json'
//     }),
//     body: this.requestBody
//   };
//   const url = this.baseUrl + this.endpoint;
//   this.observable = this.http.post(url, options);
//     this.observable.subscribe(
//       response => {
//         this.response = response;
//       },
//       error => {
//         this.errorMessage = error.message;
//       }
//     );
//   }

// }





