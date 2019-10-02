import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import {
    trigger,
    state,
    style,
    animate,
    transition,
  } from '@angular/animations';

import { ContentService } from '../../shared/content/content.service';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ContentService],
  animations: [
    trigger('height', [
        // ...
        state('open', style({
          height: '65.5px',
          opacity: 1
        })),
        state('closed', style({
          height: '0',
          opacity: 0
        })),
        transition('open => closed', [
          animate('0.2s')
        ]),
        transition('closed => open', [
          animate('0.3s')
        ]),
      ]),
  ]
})
export class LoginComponent implements OnInit{

    constructor(private route: ActivatedRoute, private router: Router, private contentService : ContentService) { }

    profileForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl(''),
        passwordRepeat: new FormControl(''),
    });

    titleLogIn: String = "Login";
    titleRegister: String = "Register";
    titleText: String = this.titleLogIn;

    registerNoAccount: String = "You don't have an account? Click Here :D";
    registerAlreadyAccount: String = "<- Go Back";
    registerText: String = this.registerNoAccount;

    showingLogin: Boolean = true;

    errorMessage: String = "";

    ngOnInit(){
        let token = JSON.parse(localStorage.getItem('token'));
        if(token != null && token != '' && token != ' '){
            this.goToMain();
        }
    }

    registerToggle(event){
        if(event != null){
            event.preventDefault();
        }
        this.showingLogin = !this.showingLogin;
        if(this.showingLogin){
            this.titleText = this.titleLogIn;
            this.registerText = this.registerNoAccount;
        }else{
            this.titleText = this.titleRegister;
            this.registerText = this.registerAlreadyAccount;
        }
        this.errorMessage = "";
    }

    onSubmit() {
        if(this.showingLogin){
            let json = {
                email: this.profileForm.value.email,
                password: this.profileForm.value.password
            }
            this.contentService.loginUser(json).subscribe((response: any) => {
                console.log(response);
                localStorage.setItem("token", response.token);
                this.goToMain();
            }, (error)=>{
                console.log(error);
                this.errorMessage = error.error.message;
            });
        }else{
            let json = {
                email: this.profileForm.value.email,
                password: this.profileForm.value.password,
                password_repeat: this.profileForm.value.passwordRepeat
            }
            this.contentService.registerUser(json).subscribe((response) => {
                alert("Register complete, now login");
                this.registerToggle(null);
                console.log(response);
            }, (error)=>{
                console.log(error);
                this.errorMessage = error.error.message;
            });
        }
    }

    goToMain(){
        this.router.navigate(['/main']);
    }
}