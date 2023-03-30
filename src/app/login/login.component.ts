import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,FormArray, Validators} from '@angular/forms';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit{
email:any
password:any
home:any

  constructor(private commonservice:CommonService){
     
  }

  login=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',Validators.required),
  })

  loginUser(){
    this.commonservice.loginUser(this.login.value).subscribe((data:any)=>{
       
    })
  }

  ngOnInit(): void {
      
  }
}
