import { Component, Input, OnInit } from '@angular/core';
import { IData, ICol, IUser } from '../model/user-interface';
import { DataGridService } from './data-grid.service';
import { StatusColorPipe } from '../status-color.pipe';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  providers: [StatusColorPipe]
})
export class DataGridComponent implements OnInit {

  @Input() headers: ICol[] = []
  @Input() data: IUser[] = []

  result: IUser[] = []

  selectedColumn!: string
  filterText = new FormControl('');



  constructor(public statusColorPipe: StatusColorPipe) {
    this.result = this.data
    this.filterText.valueChanges.subscribe(value => {
      this.filterData(value);
    });
  }

  ngOnInit(): void {
  }

  filterData(value: string): void {
    if (!value) {
      this.result = this.data;
    } else {
      this.result = this.data.filter(item =>
        this.headers.some(header =>
          item[header.key]?.toString().toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  }
}