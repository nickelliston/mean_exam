import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  parentVar: any;
  oneobj = {};
  allPobjects = [];
  myevent = null;
  constructor(
    private http: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit() {
    this.getAllPrObjects();
  }

  getAllPrObjects(){
    const obs = this.http.getPrObjects();
    obs.subscribe(data =>{
      //console.log(data);
      this.allPobjects = data['data']
    });
  }

  objToShow(obj){
    (this.parentVar === obj)? this.parentVar = null : this.parentVar = obj;

    }

  deletePobject(x){
    //console.log('I am in delete one p object:', x , x._id);
    const obs = this.http.deletePrObject(x._id);
    obs.subscribe(data => {
      this. getAllPrObjects();
    });
  }

  dataFromChild(eventData) {
    this.parentVar = null;
    this.myevent = eventData;
    //console.log(eventData);
  // that is how we map the updated data to existing data and replace the ecisting data with the new
    this.allPobjects = this.allPobjects.map(p => p._id === eventData._id ? eventData : p);
  }
}
