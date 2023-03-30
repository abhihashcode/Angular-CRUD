import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  tabledata:any
  id:any
  constructor(private commonservice:CommonService){
    
  }

  ngOnInit():void{
    this.getUserData();
  }

  getUserData(){  
    console.log("Welcome in home component")  
    this.commonservice.getUserData().subscribe((data:any)=>{
      console.log(data)
      this.tabledata=data;
    })
  }

  deleteUser(id:any){
    console.log(id)
    this.commonservice.deleteUser(id).subscribe((data:any)=>{
      this.getUserData()
    })
  }

}


