import { mergeNsAndName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Yindi';
  hobbies = ['Correr', 'Surfar', 'Estudar'];
  car = {
    name: 'Megane',
    year:'2011',    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
