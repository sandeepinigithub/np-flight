import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  userData: any = {
    name: '',
    email: '',
    password: '',
    repassword: ''
  };

  constructor(private router : Router ,private authService : AuthService) { }

  ngOnInit() { }

  signUp(data: any) {
    // console.log(data);
    localStorage.setItem('userData',JSON.stringify(data));
    alert("You are registered ! Please signin");
    this.router.navigate(['/']);

  }
  signIn(email : string , password:string){
    let temp = JSON.parse(localStorage.getItem('userData') || '{}');
    // console.log(temp);       
    if(email.valueOf() !== temp.email.valueOf())
      alert('Please enter correct email');
    if(password.valueOf() !== temp.password.valueOf())
      alert('Please enter correct password');
    if((email.valueOf() === temp.email.valueOf()) && (password.valueOf() === temp.password.valueOf())){
      this.router.navigate(['/']);
      this.authService.setLogin(true);

    }
    

    
  }

}
