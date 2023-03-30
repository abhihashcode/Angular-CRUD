import { Component } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,FormArray, Validators} from '@angular/forms';
import { CommonService } from '../common.service';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {
  constructor(private commonservice:CommonService,public MessageService:MessageService ){
     
  }

  register=new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    age:new FormControl('',Validators.required),
  })

  registerSubmit(){
    
    if(this.register.valid){
      this.commonservice.registerSubmit(this.register.value).subscribe((data:any)=>{
     
      })
    }else{
      this.MessageService.add({ severity: 'error', summary: 'Success', detail: 'Registration Sucessfully' });
    }
  }
}
