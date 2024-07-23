import { Component, Input, OnInit } from '@angular/core';
import { IData, ICol, IUser } from '../model/user-interface';
import { DataGridService } from './data-grid.service';
import { StatusColorPipe } from '../status-color.pipe';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  providers: [StatusColorPipe]
})
export class DataGridComponent implements OnInit {

  @Input() headers: ICol[] = []
  @Input() data: IUser[] = []
  // @Input() keys!: string

  constructor(public statusColorPipe: StatusColorPipe) { }


  ngOnInit(): void {

  }

}
