import { Component, OnInit } from '@angular/core';
import { TofetchService } from 'src/app/services/tofetch.service';
import { Modal } from '../modal';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  constructor( private tofetch: TofetchService) {}

  ngOnInit(): void {
    this.tofetch.getAllProperties().subscribe(
      data => {
        this.properties = data;
        console.log(data);
      }, error =>{
        console.error(error);
      }
      
    );
  }
  properties: Array<Modal>;
}
