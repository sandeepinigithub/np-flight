import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email : string;
  password : string;
  userData:any= {
    name: '',
    email: '',
    password: '',
    repassword:''
  };

  constructor(){}

  ngOnInit(){}
  

}
