import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adddetails',
  templateUrl: './adddetails.component.html',
  styleUrls: ['./adddetails.component.css']
})
export class AdddetailsComponent implements OnInit {
pro=[]
products={}
  constructor(private ser:ServiceService,private route:ActivatedRoute) { }

  ngOnInit() {
    //  this.pro=Object.values(this.ser.cars)
    this.route.params.subscribe(p=>{
     
    this.products=this.ser.cars[p.sek]
      console.log(p)
      


      
    })

  }

}
