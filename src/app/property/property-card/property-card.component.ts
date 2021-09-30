import { Component, Input, OnInit } from '@angular/core';
import { faAddressBook, faPen } from "@fortawesome/free-solid-svg-icons";
import { Modal } from '../modal';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  faAddressBook = faAddressBook;
  faPen = faPen;
  
@Input() property:Modal;
  constructor(  ) { }

  ngOnInit(): void {
  }

}
