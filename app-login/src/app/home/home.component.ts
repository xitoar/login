import { Component, Input, OnInit, Output } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  mensaje: String ="";
  

  constructor(private dataService: DataServiceService) { }

  
  ngOnInit(): void {
    this.mensaje = this.dataService.mensaje;

  }

}
