import { Component, OnInit } from '@angular/core';
import * as qrcode from 'qrcode';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   //this.generateQRCodeForScreen();
  }

  printScreen(){
    window.print();
}



generateQRCodeForScreen() {

  const currentText = document.body.innerText;
  const myElement = document.getElementById('qr-code');
  qrcode.toCanvas(myElement, currentText, { errorCorrectionLevel: 'M', width: 500 , margin: 2},  (error) => {
    if (error) {
      console.error(error);
    }

      var popup:any = window.open();
        popup.document.body.appendChild(myElement);
 
      });
}
} 
                  