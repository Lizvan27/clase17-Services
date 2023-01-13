import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{

  mostrar:any=[];
  constructor(private data:DataService){}

  ngOnInit(): void {
    this.data.getAll().subscribe( data => this.mostrar = data)
    
  }

}
