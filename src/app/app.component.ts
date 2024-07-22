import { Component, OnInit } from '@angular/core';
import { DataGridService } from './data-grid/data-grid.service';
import { ICol, IUser } from './model/user-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';

  data: IUser[] = []
  headers: ICol[] = []

  data_sec: IUser[] = []
  headers_sec: ICol[] = []
  // keys: string[] = [];
  // keys!: string;
  constructor(private dataGridService: DataGridService) { }

  public getUsers() {
    this.dataGridService.getData('dataGridUser.json').subscribe((res) => {
      this.headers = res.col;
      this.data = res.data;
    })
  }

  public getCustomer() {
    this.dataGridService.getData('dataGridCustomer.json').subscribe((res) => {
      this.headers_sec = res.col;
      this.data_sec = res.data;
    })
  }

  ngOnInit(): void {
    this.getUsers()
    this.getCustomer()
  }


  // this.keys = Object.keys(this.users[0]);
  // this.keys = res.col.keys




}
