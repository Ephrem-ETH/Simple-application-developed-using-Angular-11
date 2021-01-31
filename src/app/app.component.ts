import { Component, OnInit } from '@angular/core';
import {ParliamentMemberService} from './parliament-member.service';
import {ParliamnetMember} from './models/parliamentmember.model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'parliament-members';
  memberList:any;
  constructor(private parliamentMemberService:ParliamentMemberService )
  {
}
ngOnInit(){
   this.getParliamentMembers();
}
getParliamentMembers(){
  this.parliamentMemberService.getMembers().subscribe( (members:any) => this.memberList = members);
}
}
