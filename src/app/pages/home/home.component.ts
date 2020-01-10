import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
product=[]

  constructor(private service:ServiceService) { }
 
  ngOnInit() {
    this.product=Object.values(this.service.cars)
 
  }



}