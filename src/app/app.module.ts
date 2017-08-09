import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  DashboardComponent,
  IconsComponent, NotificationsComponent,
  OverviewComponent, ProfileComponent,
  TableComponent, TypographyComponent
} from './components/index.components';
import { RoutingModule } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IconsComponent, NotificationsComponent,
    OverviewComponent, ProfileComponent,
    TableComponent, TypographyComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
