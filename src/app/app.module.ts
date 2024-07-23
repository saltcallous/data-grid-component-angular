import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { TagCreatorComponent } from './data-grid/tag-creator/tag-creator.component'
import { StatusColorPipe } from './status-color.pipe';
import { setBack } from './Directives/directives.directive';

@NgModule({
  declarations: [
    AppComponent,
    DataGridComponent,
    StatusColorPipe,
    TagCreatorComponent,
    setBack
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
