import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  imgsrc1="https://apollo-singapore.akamaized.net/v1/files/1oji63f14yvm3-IN/image;s=300x600;q=60"
  imgsrc2="https://apollo-singapore.akamaized.net/v1/files/7zni08pbxvj33-IN/image;s=300x600;q=60"
  imgsrc3="https://apollo-singapore.akamaized.net/v1/files/j5uincxu0v5a3-IN/image;s=300x600;q=60"
  imgsrc4="https://apollo-singapore.akamaized.net/v1/files/98rfwlgo6zfz-IN/image;s=300x600;q=60"
  imgsrc5="https://apollo-singapore.akamaized.net/v1/files/wm4iosa4ijbm3-IN/image;s=300x600;q=60"
  imgsrc6="https://apollo-singapore.akamaized.net/v1/files/zh5bprjqrgmi1-IN/image;s=300x600;q=60"
  imgsrc7="https://apollo-singapore.akamaized.net/v1/files/v815kn15t18v2-IN/image;s=300x600;q=60"
  imgsrc8="https://apollo-singapore.akamaized.net/v1/files/yfpnvvxag3na3-IN/image;s=300x600;q=60"
  imgsrc9="https://apollo-singapore.akamaized.net/v1/files/9lal8uym39vw1-IN/image;s=300x600;q=60"

cars={
  "HUNDAI":{id:1,name:"HUNDAI",price:1200000,message:"vechicle with good condition",date:"12-31-2019",image:this.imgsrc1,location:"Vizag,A.P",model:2014},
  "BMW":{id:2,name:"BMW",price:"35,00,000",message:"vechicle with good condition",date:"02-11-2019",image:this.imgsrc2,location:"Hyderabad,T.S",model:2015},
  "MAHENDRA":{id:3,name:"MAHENDRA",price:"7,50,000",message:"vechicle with good condition",date:"1-09-2018",image:this.imgsrc3,location:"P.R peta,A.P",model:2022},
   "KIA":{id:4,name:"KIA",price:"6,00,000",message:"vechicle with good condition",date:"1-1-2020",image:this.imgsrc4,location:"vizag,A.P",model:2015},
   "HONDA":{id:5,name:"HONDA",price:"4,50,000",message:"vechicle with good condition",date:"21-11-2019",image:this.imgsrc5,location:"Tuni,A.P",model:2017},
   "TOYATA":{id:6,name:"TOYATA",price:"3,50,000",message:"vechicle with good condition",date:"07-08-2019",image:this.imgsrc6,location:"Bhemili,A.P",model:2018},
   "BENZ":{id:7,name:"BENZ",price:"12,75000",message:"vechicle with good condition",date:"30-12-2019",image:this.imgsrc7,location:"Kadapa,A.P",model:2016},
   "audi":{id:8,name:"audi",price:"15,75000",message:"vechicle with good condition",date:"11-11-2019",image:this.imgsrc8,location:"Kakinada,A.P",model:2019},
   "VOLKSWEGAN":{id:9,name:"VOLKSWEGAN",price:"4,00,000",message:"vechicle with good condition",date:"18-03-2019",image:this.imgsrc9,location:"PEntakota,A.P",model:2010},
   "KIA1":{id:10,name:"KIA1",price:"6,00,000",message:"vechicle with good condition",date:"1-1-2020",image:this.imgsrc4,location:"vizag,A.P",model:2020},
   "BMW1":{id:11,name:"BMW1",price:"35,00,000",message:"vechicle with good condition",date:"02-11-2019",image:this.imgsrc2,location:"Hyderabad,T.S",model:2222},
   "HONDA1":{id:12,name:"HONDA1",price:"4,50,000",message:"vechicle with good condition",date:"21-11-2019",image:this.imgsrc5,location:"Tuni,A.P",model:2015},

}


  constructor() { }
}
