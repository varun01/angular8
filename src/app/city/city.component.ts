import { DataApiService } from './../data/data-api/data-api.service';
import { Component, OnInit } from '@angular/core';
import { User } from "../user";

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  public data: any;
  constructor(private apiService: DataApiService) { }

  ngOnInit() {
    this.data = this.apiService.getData().subscribe(response => {
      this.data = response;
    });
  }

  /**
   * callServiceMethod
   */
  public callServiceMethod() {
    console.log('Response from service'+this.data.data);
  }

}
