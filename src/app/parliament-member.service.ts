import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators'
import { Observable } from 'rxjs';
import {ParliamnetMember} from './models/parliamentmember.model';
@Injectable({
  
  providedIn: 'root'
})
export class ParliamentMemberService {
    url = "https://data.parliament.scot/api/members";
   constructor(private http:HttpClient) { }
  // public getMembers(): Observable<ParliamnetMember[]>{
  //   return this.http.get(this.url).pipe(map((members:any)=>{
  //     return members.map((member:any) =>{
  //       return {
  //         personId: member.PersonId,
  //         name: member.PreferredName,
  //         photoURL: member.PhotoURL,
  //         birthDate: member.BirthDate

  //       }
  //     })
  //   }))

  // }
  getMembers(){
    return this.http.get(this.url);
  }

  
}
