import { Component, OnInit, Input} from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  @Input() childVar: any;
  obj = {_id: '', title: '', descr: '', secondary:[]};
  sec = [];

  sObject = {name: '', content: '', rating: 5};
  checker = 1;

  showEditSecForm = false;
  showEditSecFormId = 0;

  constructor(
    private http: HttpService,
    private route: ActivatedRoute,
    private router: Router
    
    ) { }

  ngOnInit() {
    console.log(this.route.snapshot.params.id);
    this.getOneObject();
    this.showAllSec();
  }


  getOneObject() {
    const obs = this.http.getPrObjecById(this.route.snapshot.params.id);
    obs.subscribe( data => {
      console.log(data);
      this.obj = data['data'];
      console.log(this.obj['id'])
    });
  }

  showAllSec() {
    // console.log('show all comments attached to the primary!')
    const obs = this.http.showSec(this.route.snapshot.params.id);
    // console.log('my primary id' , this.route.snapshot.params.id );
    obs.subscribe(data => {
      // console.log('secondary object data:', data );
      this.sec = data['data'];

    });

  }

  submitForm(id ) {
    console.log('Form Values:', this.sObject);
    const observable = this.http.addScObject({...this.sObject , primary: id});
    console.log('Form Values:', {...this.sObject , primary: id});
    observable.subscribe(data => {
      console.log(data);
      this.sObject = {name: '', content: '', rating: 5};
      this.checker = 0;
      this.router.navigate(['/home']);
    });
  }

  deleteSec(id){
    console.log('delete button clicked!')
    const observable = this.http.deleteSec(id);
    observable.subscribe(data => {
      console.log('data from delete:', data);
      this.router.navigate(['/home']);
    });

  }

  editSec(id) {
    console.log('I clicked on edit!!');
    this.showEditSecForm = true;
    this.showEditSecFormId = id;
  }

  submitEditForm(id, myobjectForm) {
    // console.log(id, myobjectForm.value, { ...myobjectForm.value, _id: id});
    console.log('colected id and s.object from edit:', { ...myobjectForm.value, _id: id});
    const obs = this.http.editSecd( { ...myobjectForm.value, _id: id});
    obs.subscribe(data => {
      console.log('Data retruned from edit s object', data);
      this.sObject = {name: '', content: '', rating: 5};
      this.router.navigate(['/show']);

    });

  }
}
