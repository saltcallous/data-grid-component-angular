import { Component, Input, OnInit } from '@angular/core';
import { IData, ICol, IUser } from '../model/user-interface';
import { DataGridService } from './data-grid.service';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
})
export class DataGridComponent implements OnInit {

  @Input() headers: ICol[] = []
  @Input() data: IUser[] = []
  // @Input() keys!: string

  constructor() { }


  ngOnInit(): void {

  }

}
