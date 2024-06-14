import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { ItemService } from '../service/item.service';
import { Item } from '../item.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MenuComponent,CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  datas:Item[]=[];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.itemService.getAll().subscribe((res:any)=>{
      this.datas = res
    })
  }
}
