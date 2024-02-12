import { Component } from '@angular/core';
import * as qrcode from 'qrcode';

@Component({
  selector: 'app-qrcode-driver',
  templateUrl: './qrcode-driver.component.html',
  styleUrls: ['./qrcode-driver.component.css']
})
export class QrcodeDriverComponent {
  drivers: Driver[] = [
    new Driver(1, 'Mutien Ahmad','04/10/1997', 'JK123000010A', 'Friends Colony','Srinagar',190001,'Jammu and Kashmir','India'),
    new Driver(2, 'Parmapal Singh','02/03/1973', 'PB220129002N', 'N1 Colony','Chandigarh',870001,'Punjab','India'),
    new Driver(3, 'Vaibhav Kamthan','18/08/1981', 'MP265410012N', 'Sector 21','Shivpuri',388001,'Madhya Pardesh','India'),
    new Driver(4, 'Shubham Verma','24/05/1993', 'CH265410012N', 'H colony','Raipur',180291,'Chattisgarh','India'),

    ];
 
}

class Driver {
            id: number;
            name: string;
            dob:string;
            license: string;
            address: string;
            city:string;
            pin:number;
            state:string;
            country:string;

  constructor(id: number, name: string, dob: string ,license: string,address: string,city:string ,pin:number,state:string,country:string) {
    this.id = id;
    this.name = name;
    this.dob=dob;
    this.license = license;
    this.address = address;
    this.city=city;
    this.pin=pin;
    this.state=state;
    this.country=country;
  } 
  
  displayQRCode() {
      
      const details = `Name: ${this.name} \n dob:${this.dob} \n License: ${this.license} \n Address: ${this.address} \n City: ${this.city} \n Pin:${this.pin} \n State: ${this.state} \n Country:${this.country}`;
      console.log(details);
      
      qrcode.toCanvas(details, { errorCorrectionLevel: 'H', margin: 2 }, (err, canvas) => {
        if (err) throw err;
        
        
        var popup:any = window.open();
        popup.document.body.appendChild(canvas);
        
      });
}
}
