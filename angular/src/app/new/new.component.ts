import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  pObject = {title: '', descr: '' };
  sObject = {name: '', content: '', rating: 5};
  pid: any;

  replyErrors = [];
  checker = 1;

  constructor(
    private http: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submitForm(event: Event, form: NgForm) {
    event.preventDefault();
    // console.log (this.pObject);
    const observable = this.http.addPrObject(this.pObject);
    observable.subscribe({next: data => {
        // console.log('Mydata from new', data);
        this.pid = data
        console.log('probject id:', this.pid['_id']);
        this.pObject = {title: '', descr: '' };
        this.checker = 0;
        console.log('What is in sObject:', this.sObject)
        this.addSecondary({...this.sObject, primary: this.pid['_id']});

        // this.router.navigate(['/home']);
      },
      error: error => {
        console.log('Are there any errors?', error);
        this.replyErrors = Array.isArray(error.error) ? error.error : ['Something went wrong'];
      }
    });


    // this.router.navigate(['/home']);
  }

  addSecondary(sdata) {
    console.log('secondary object data:', sdata);
    const obs = this.http.addScObject(sdata);
    obs.subscribe({next: data => {
        console.log('Mydata from new', data);
        this.pid = data['id'];
        this.sObject = {name: '', content: '', rating: 5};
      },
      error: error => {
        console.log('Are there any errors?', error);
        this.replyErrors = Array.isArray(error.error) ? error.error : ['Something went wrong'];
      }
    });
    //this.router.navigate(['/home']);
  }
}

//updatePrmary
