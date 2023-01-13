import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
})
export class DetallesComponent implements OnInit {

  detalle: any= [];
  constructor(private data:DataService){}

  ngOnInit(): void {
    this.data.getAll().subscribe(data => this.detalle = data)
  }
}
