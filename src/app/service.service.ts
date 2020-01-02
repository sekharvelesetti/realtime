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
  "hundai":{name:"HUNDAI",price:"12,00,000",message:"vechicle with good condition",date:"12-31-2019",image:this.imgsrc1,location:"Vizag,A.P"},
  "bmw":{name:"BMW",price:"35,00,000",message:"vechicle with good condition",date:"02-11-2019",image:this.imgsrc2,location:"Hyderabad,T.S"},
  "mahendra":{name:"MAHENDRA",price:"7,50,000",message:"vechicle with good condition",date:"1-09-2018",image:this.imgsrc3,location:"P.R peta,A.P"},
  "kia":{name:"KIA",price:"6,00,000",message:"vechicle with good condition",date:"1-1-2020",image:this.imgsrc4,location:"vizag,A.P"},
  "honda":{name:"HONDA",price:"4,50,000",message:"vechicle with good condition",date:"21-11-2019",image:this.imgsrc5,location:"Tuni,A.P"},
  "toyota":{name:"TOYATA",price:"3,50,000",message:"vechicle with good condition",date:"07-08-2019",image:this.imgsrc6,location:"Bhemili,A.P"},
  "benz":{name:"BENZ",price:"12,75000",message:"vechicle with good condition",date:"30-12-2019",image:this.imgsrc7,location:"Kadapa,A.P"},
  "audi":{name:"AUDI",price:"15,75000",message:"vechicle with good condition",date:"11-11-2019",image:this.imgsrc8,location:"Kakinada,A.P"},
  "farari":{name:"VOLKSWEGAN",price:"4,00,000",message:"vechicle with good condition",date:"18-03-2019",image:this.imgsrc9,location:"PEntakota,A.P"}

}


  constructor() { }
}
