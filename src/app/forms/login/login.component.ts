import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   login=new FormGroup({
     user:new FormControl('',[Validators.required]),
     password:new FormControl('',[Validators.required])
   })
  constructor(private route:Router) { }
 profile={email:"sek@gmail.com",password:"sekhar"}
 profile1={email:"",password:""}
 sekhar="fill the field"
  ngOnInit() {
  }
submit(p:any){
   //reactive 1st login -->
  // if(!this.login.controls.user.valid){
  //   alert('give the user name')
  // }
  // if(!this.login.controls.password.valid){
  //   alert('give the password')
  // }
  // if(this.login.controls.user.valid,this.login.controls.password.valid){
  //   this.route.navigate(['/home'])
  // }

  //2nd method
  // if(!this.login.controls.user.valid || !this.login.controls.password.valid){
  //   alert("give the valid details")
  // }else{
  //   this.route.navigate(['/home'])
  // }

// let email =this.login.get('user').value
//  let pass= this.login.get('password').value


if(this.profile.email!==this.login.value.user){
  alert("give the valid email address")
}else if (this.profile.password!==this.login.value.password){
  alert("give the password")
}else{
  this.route.navigate(['/'])
}


// if(!this.login.controls.user.valid){
//     alert('give the user name')
//   }
//   else if(!this.login.controls.password.valid){
//     alert('give the password')
//   }else
//   (this.login.controls.user.valid,this.login.controls.password.valid){
//     this.route.navigate(['/home'])
//   }

 
}
}
