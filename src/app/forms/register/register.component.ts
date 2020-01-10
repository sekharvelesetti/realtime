import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
Registration= new FormGroup ({
  username: new FormControl('',[Validators.required]),
  email: new FormControl('',[Validators.required]),
  password: new FormControl('',[Validators.required]),
  confirmpassword: new FormControl('',[Validators.required])
})
  constructor(private route:Router) { }

  ngOnInit() {
  }
submit(){
  if(!this.Registration.controls.username.valid || !this.Registration.controls.email.valid || !this.Registration.controls.password.valid || !this.Registration.controls.confirmpassword.valid){
    alert("enter the valid email address")
  }else{
    this.route.navigate(['/home'])
  }
  console.log(this.Registration.value)
}
}
