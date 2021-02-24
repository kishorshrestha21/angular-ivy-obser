import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-my-data',
  templateUrl: './my-data.component.html',
  styleUrls: ['./my-data.component.css']
})
export class MyDataComponent implements OnInit {
users=[];
  constructor(private _dataService:DataServiceService) { 
    
  }

  ngOnInit() {
    this._dataService.jsonData().subscribe(res=> this.users = res)
  }

}