import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { TagCreatorComponent } from './data-grid/tag-creator/tag-creator.component'
import { StatusColorPipe } from './status-color.pipe';
import { setBack } from './Directives/directives.directive';
import { DynamicFormsComponent } from './forms/dynamic-forms/dynamic-forms.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DataGridComponent,
    StatusColorPipe,
    TagCreatorComponent,
    setBack,
    DynamicFormsComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
