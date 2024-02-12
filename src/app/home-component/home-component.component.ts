import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators } from '@angular/forms';
import { Login } from '../login';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  login: Login =new Login();
    
  constructor(private fb : FormBuilder , private loginService: LoginService , private router:Router , ) { }

  registrationForm= this.fb.group({
    //form fields are inserted
    userName: ['',Validators.required ],
    passWord:['', Validators.required],
  });

  ngOnInit(): void {
  }

  //validation
  get userName() {
    return this.registrationForm.get('userName'); 
  }
  get passWord() {
    return this.registrationForm.get('passWord'); 
  }

  onSubmit() {
    console.log(this.registrationForm.value);
 }

  //token generation
  addUser()
  {
    console.log(this.login);
    this.loginService.addUser(this.login).subscribe(
      (data:any)=>{console.log(data)
      sessionStorage.setItem('Token',data.jwtToken) 
       alert("Login Successful");
    this.router.navigate(['/screen']);
                  },
    
    (error:any)=>{
        
        if(error instanceof HttpErrorResponse){ 
       alert(error.error);
       window.location.reload();
        }
      })
  }
  //user registration
  regUser()
  {
    console.log(this.login);
    this.loginService.regUser(this.login).subscribe((data:any)=>console.log(data),error=>console.log(error,"Registered"));
    alert("User Successfully Registered!")
    window.location.reload();
  }

}