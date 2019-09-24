import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly base = '/api/objects';
  private readonly sbase = '/api/sobjects';
  constructor(private http: HttpClient) { }

  getPrObjects(){
    return this.http.get(`${this.base}`);
  }
  getPrObjecById(id: string) {
    // console.log('get object to edit with id:', id)
    return this.http.get(`${this.base}/` + id);
  }

  addPrObject(newPObject) {
    // console.log('I am sending new object to my mongoose router', newPObject);
    return this.http.post(`${this.base}`, newPObject);
  }

  editPrObject(obj) {
    // console.log('I am sending edit to mongoose router ', obj);
    return this.http.put(`${this.base}/${obj._id}`, obj);
  }

  deletePrObject(id) {
    // console.log('I am in delete p object service' , id);
    return this.http.delete(`${this.base}/` + id);
  }


  // secondary
  showSec(pid) {
    // console.log( 'sending pid to get secondary objects attached to pobject' , pid);
    return this.http.get(`${this.sbase}/` + pid);
  }

  addScObject(newSObject) {
    // console.log('I am sending new object to my mongoose to create secondary document', newSObject);
    return this.http.post(`${this.sbase}`, newSObject);
  }

  editSecd(objject) {
    //console.log('Edit secondary', objject);
    return this.http.put(`${this.sbase}/${objject._id}`, objject);
  }

  deleteSec(id){
    console.log('deleting secondary:' , id);
    return this.http.delete(`${this.sbase}/` + id);
  }

}
